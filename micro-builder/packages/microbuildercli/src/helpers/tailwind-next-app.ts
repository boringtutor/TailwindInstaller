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

  const { cwd, isTsx } = config;
  try {
    // await runConfigFilesInstaller(cwd, config.isTsx);
    // await writePostcssConfigToFile(cwd);
    // await installTailwindDependencies(cwd);
    // if (config.globalCssPath) {
    //   await updateGlobalCss(cwd, config.globalCssPath);
    // } else {
    //   const cssPath = path.resolve(cwd, "src/app/globals.css");
    //   config.globalCssPath = cssPath;
    //   await createGlobalCss(cwd, cssPath);
    // }
    await updateTsConfig(cwd, isTsx);
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
