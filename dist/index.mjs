// src/index.ts
import dayjs from "dayjs";
import chalk from "chalk";
var log = (level, ...messages) => {
  const logData = [];
  const date = dayjs().format("YYYY-MM-DD HH:mm:ss");
  logData.push(`[${chalk.gray(date)}]`);
  switch (level) {
    case "INFO":
      logData.push(`${chalk.blue.bold(level)}`);
      break;
    case "WARN":
      logData.push(`${chalk.yellow.bold(level)}`);
      break;
    case "ERROR":
      logData.push(`${chalk.red.bold(level)}`);
      break;
    default:
      logData.push(`${chalk.blue.bold(level)}`);
      break;
  }
  logData.push(":");
  logData.push(...messages);
  console.log(...logData);
  return {
    info: (...msgs) => log("INFO", ...msgs),
    warn: (...msgs) => log("WARN", ...msgs),
    error: (...msgs) => log("ERROR", ...msgs)
  };
};
var info = (...messages) => log("INFO", ...messages);
var warn = (...messages) => log("WARN", ...messages);
var error = (...messages) => log("ERROR", ...messages);
var ExaLogger = {
  log,
  info,
  warn,
  error
};
export {
  ExaLogger
};
