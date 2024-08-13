import dayjs from 'dayjs';
import { LogLevel } from './../types/types.d';
import chalk from 'chalk';

const log = (level: LogLevel, ...messages: any) => {
  const logData = [];
  const date = dayjs().format('YYYY-MM-DD HH:mm:ss');

  logData.push(`[${chalk.gray(date)}]`);

  switch (level) {
    case 'INFO':
      logData.push(`${chalk.blue.bold(level)}`);
      break;
    case 'WARN':
      logData.push(`${chalk.yellow.bold(level)}`);
      break;
    case 'ERROR':
      logData.push(`${chalk.red.bold(level)}`);
      break;
    default:
      logData.push(`${chalk.blue.bold(level)}`);
      break;
  }

  logData.push(":")
  logData.push(...messages);
  console.log(...logData);

  // Return an object to allow chaining
  return {
    info: (...msgs: any) => log('INFO', ...msgs),
    warn: (...msgs: any) => log('WARN', ...msgs),
    error: (...msgs: any) => log('ERROR', ...msgs),
  };
};

const info = (...messages: any) => log('INFO', ...messages);
const warn = (...messages: any) => log('WARN', ...messages);
const error = (...messages: any) => log('ERROR', ...messages);

const ExaLogger = {
  info,
  warn,
  error,
};

export default ExaLogger;