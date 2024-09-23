import ora from "ora";
import { FrameworkConfig } from "../types/misc";
import { logg, successReturn } from "./logger";
import { handleError } from "./handel-error";
import {
  installTailwindDependencies,
  runConfigFilesInstaller,
  writePostcssConfigToFile,
} from "./next-app-helpers";
import path from "path";
import { createGlobalCss, updateGlobalCss } from "./global-css-installer";
import { updateTsConfig } from "./tsconfig-updater";

export async function installTailwindForNextApp({
  config,
}: {
  config: FrameworkConfig;
}) {
  console.log(" ");
  logg("installing tailwind for next-app router...");
  const dependenciesSpinner = ora(
    successReturn("Installing TailwindCss...")
  )?.start();

  const { cwd, TypescriptConfig, tsconfigPath } = config;
  try {
    await runConfigFilesInstaller(cwd, config.isTsx);

    const postcssPromise = writePostcssConfigToFile(cwd);
    const tailwindPromise = installTailwindDependencies(cwd);

    let cssPromise;
    if (config.globalCssPath) {
      cssPromise = updateGlobalCss(cwd, config.globalCssPath);
    } else {
      const cssPath = path.resolve(cwd, "src/app/globals.css");
      config.globalCssPath = cssPath;
      cssPromise = createGlobalCss(cwd, cssPath);
    }

    const tsconfigPromise =
      tsconfigPath && TypescriptConfig
        ? updateTsConfig(tsconfigPath)
        : Promise.resolve();

    await Promise.all([
      postcssPromise,
      tailwindPromise,
      cssPromise,
      tsconfigPromise,
    ]);

    dependenciesSpinner?.succeed();
  } catch (e) {
    dependenciesSpinner?.fail();
    handleError(e);
  }
}

export async function updateCssInWholeApp(cwd: string, globalcssPath: string) {
  //TODO:we will use this function to update the css in the page only:
  // we will take the css from the globalcssPath and implement the tailwind design system;
}
