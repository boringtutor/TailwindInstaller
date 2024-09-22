import chalk from "chalk";

export const logg = (...args: unknown[]) => {
  console.log(chalk.cyan(...args));
};

export const success = (...args: unknown[]) => {
  console.log(chalk.green(...args));
};

export const error = (...args: unknown[]) => {
  console.log(chalk.red(...args));
};

export const warn = (...args: unknown[]) => {
  console.log(chalk.yellow(...args));
};

// Return versions
export const logReturn = (...args: unknown[]) => {
  return chalk.cyan(...args);
};

export const successReturn = (...args: unknown[]) => {
  return chalk.green(...args);
};

export const errorReturn = (...args: unknown[]) => {
  return chalk.red(...args);
};

export const warnReturn = (...args: unknown[]) => {
  return chalk.yellow(...args);
};
