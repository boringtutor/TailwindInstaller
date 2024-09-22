import { appendFileSync, existsSync, writeFileSync } from "fs";
import { GLOBAL_CSS_CONTENT } from "./tailwind-template";

export async function updateGlobalCss(cwd: string, globalCssPath: string) {
  if (existsSync(globalCssPath)) {
    appendFileSync(globalCssPath, GLOBAL_CSS_CONTENT, {
      encoding: "utf-8",
    });
  }
}

export async function createGlobalCss(cwd: string, globalCssPath: string) {
  if (!existsSync(globalCssPath)) {
    writeFileSync(globalCssPath, GLOBAL_CSS_CONTENT, {
      encoding: "utf-8",
    });
  }
}
