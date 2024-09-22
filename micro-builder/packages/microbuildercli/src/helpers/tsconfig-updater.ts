import { loadConfig } from "tsconfig-paths";
import { warn } from "./logger";
import fs from "fs-extra";

export async function updateTsConfig(cwd: string, isTsx: boolean) {
  //read tsconfig.json
  const tsConfig = await loadConfig(cwd);
  if (tsConfig.resultType === "failed") {
    throw new Error(
      `Failed to load ${isTsx ? "tsconfig" : "jsconfig"}.json. ${
        tsConfig.message ?? ""
      }`.trim()
    );
  }

  const tsconfig = await fs.readJSON(tsConfig.configFileAbsolutePath);
  warn(`tsconfig: ${JSON.stringify(tsconfig, null, 2)}`);
}
