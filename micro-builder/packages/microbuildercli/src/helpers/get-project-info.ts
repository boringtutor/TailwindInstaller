import { ProjectInfo } from "../types/misc";

import { FRAMEWORKS } from "./templates";
import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";
import { loadConfig } from "tsconfig-paths";
import { findGlobalCssPath } from "./misc";

export const PROJECT_SHARED_IGNORE = [
  "**/node_modules/**",
  ".next",
  "public",
  "dist",
  "build",
];

export async function getProjectInfo(cwd: string): Promise<ProjectInfo | null> {
  const [configFiles, isSrcDir, isTsx, aliasPrefix, globalCssPath] =
    await Promise.all([
      fg.glob("**/{next,vite,astro}.config.*|gatsby-config.*|composer.json", {
        cwd,
        deep: 3,
        ignore: PROJECT_SHARED_IGNORE,
      }),
      fs.pathExists(path.resolve(cwd, "src")),
      isTypeScriptProject(cwd),
      getTsConfigAliasPrefix(cwd),
      getGlobalCssPath(cwd),
    ]);
  const isUsingAppDir = await fs.pathExists(
    path.resolve(cwd, `${isSrcDir ? "src/" : ""}app`)
  );
  const type: ProjectInfo = {
    framework: FRAMEWORKS["manual"],
    isSrcDir,
    isRSC: false,
    isTsx,
    aliasPrefix,
    globalCssPath,
  };
  if (!configFiles.length) {
    return type;
  }
  // Next.js.
  if (configFiles.find((file) => file.startsWith("next.config."))?.length) {
    type.framework = isUsingAppDir
      ? FRAMEWORKS["next-app"]
      : FRAMEWORKS["next-pages"];
    type.isRSC = isUsingAppDir;
    return type;
  }
  // Vite and Remix.
  // They both have a vite.config.* file.
  if (configFiles.find((file) => file.startsWith("vite.config."))?.length) {
    // We'll assume that if the project has an app dir, it's a Remix project.
    // Otherwise, it's a Vite project.
    // TODO: Maybe check for `@remix-run/react` in package.json?
    type.framework = isUsingAppDir ? FRAMEWORKS["remix"] : FRAMEWORKS["vite"];
    return type;
  }

  return type;
}

export async function isTypeScriptProject(cwd: string) {
  const files = await fg.glob("tsconfig.*", {
    cwd,
    deep: 1,
    ignore: PROJECT_SHARED_IGNORE,
  });

  return files.length > 0;
}

export async function getTsConfig() {
  try {
    const tsconfigPath = path.join("tsconfig.json");
    const tsconfig = await fs.readJSON(tsconfigPath);

    if (!tsconfig) {
      throw new Error("tsconfig.json is missing");
    }

    return tsconfig;
  } catch (error) {
    return null;
  }
}

export async function getGlobalCssPath(cwd: string) {
  const globalCssPath = await findGlobalCssPath(cwd);

  if (!globalCssPath) {
    return null;
  }

  return globalCssPath;
}

export async function getTsConfigAliasPrefix(cwd: string) {
  const tsConfig = await loadConfig(cwd);

  if (tsConfig?.resultType === "failed" || !tsConfig?.paths) {
    return null;
  }

  // This assume that the first alias is the prefix.
  for (const [alias, paths] of Object.entries(tsConfig.paths)) {
    if (
      paths.includes("./*") ||
      paths.includes("./src/*") ||
      paths.includes("./app/*") ||
      paths.includes("./resources/js/*") // Laravel.
    ) {
      return alias.at(0) ?? null;
    }
  }

  return null;
}
