import { outro } from "@clack/prompts";
import { error, errorReturn, success, warn } from "./helpers/logger";
import { commandName } from "./helpers/consts";
import { version } from "../package.json";
import { cli } from "cleye";
import { getFrameworkInfo } from "./helpers/misc";
import {
  getPackageManager,
  getPackageRunner,
} from "./helpers/get-package-manager";
import { getProjectInfo } from "./helpers/get-project-info";
import path from "path";
import { runTailwindInstaller } from "./helpers/tailwind-installer";

export async function main() {
  console.log("");

  success(" Tailwind installer ...");
  const testDir = path.join(process.cwd(), "../../apps/docs");
  // console.log(testDir);
  //   const cwd = path.join(process.cwd(), testDir);
  const projectInfo = await getProjectInfo(testDir);
  if (!projectInfo) {
    error("No project info found");
    return;
  }
  warn(JSON.stringify(projectInfo, null, 2));

  const packageRunner = await getPackageRunner(testDir);
  if (!packageRunner) {
    error("No package runner found");
    return;
  }
  const packageManager = await getPackageManager(testDir);
  if (!packageManager) {
    error("No package manager found");
    return;
  }
  const frameworkInfo = getFrameworkInfo({
    projectInfo,
    packageManager,
    packageRunner,
    cwd: testDir,
  });
  success("Got the framework info");
  warn(JSON.stringify(frameworkInfo, null, 2));
  console.log(" ");
  await runTailwindInstaller({ config: frameworkInfo });
}

cli(
  {
    name: commandName,
    version: version,
    args: {
      _: {
        type: "string",
        description: "The name of the person to greet",
        alias: "name",
      },
    },
  },
  async () => {
    await main();
  }
);

process.on("SIGINT", () => {
  console.log("\n");
  outro(errorReturn("Stopping."));
  console.log("\n");
  process.exit();
});
