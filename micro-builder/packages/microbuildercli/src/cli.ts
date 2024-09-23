import { outro } from '@clack/prompts';
import { error, errorReturn, success, warn } from './helpers/logger';
import { commandName } from './helpers/consts';
import { version } from '../package.json';
import { cli } from 'cleye';
import { getFrameworkInfo } from './helpers/misc';
import {
  getPackageManager,
  getPackageRunner,
} from './helpers/get-package-manager';
import { getProjectInfo } from './helpers/get-project-info';
import { runTailwindInstaller } from './helpers/tailwind-installer';
import { interactiveMode } from './helpers/intractive-mode';

export async function main(projectPath: string) {
  success(' Tailwind installer ...');
  const testDir = projectPath;

  const projectInfo = await getProjectInfo(testDir);
  if (!projectInfo) {
    error('No project info found');
    return;
  }

  const packageRunner = await getPackageRunner(testDir);
  if (!packageRunner) {
    error('No package runner found');
    return;
  }
  const packageManager = await getPackageManager(testDir);
  if (!packageManager) {
    error('No package manager found');
    return;
  }
  const frameworkInfo = getFrameworkInfo({
    projectInfo,
    packageManager,
    packageRunner,
    cwd: testDir,
  });
  success('Got the framework info');
  warn(JSON.stringify(frameworkInfo, null, 2));
  console.log(' ');
  await runTailwindInstaller({ config: frameworkInfo });
}

cli(
  {
    name: commandName,
    version: version,
    args: {
      _: {
        type: 'string',
        description: 'The name of the person to greet',
        alias: 'name',
      },
    },
  },
  async () => {
    const result = await interactiveMode();
    outro(`will install the tailwindcss in ${result}`);
    await main(result);
  },
);

process.on('SIGINT', () => {
  console.log('\n');
  outro(errorReturn('Stopping.'));
  console.log('\n');
  process.exit();
});
