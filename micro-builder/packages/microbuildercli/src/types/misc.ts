import { Framework } from "../helpers/templates";

export type PackageManagerType = "yarn" | "pnpm" | "bun" | "npm";
export type PackageRunnerType = "pnpm dlx" | "bunx" | "npx";

export type FrameworkConfig = ProjectInfo & {
  packageManager: PackageManagerType;
  packageRunner: PackageRunnerType;
  cwd: string;
};

export type ProjectInfo = {
  framework: Framework;
  isSrcDir: boolean;
  isRSC: boolean;
  isTsx: boolean;
  globalCssPath: string | null;
  aliasPrefix: string | null;
};
