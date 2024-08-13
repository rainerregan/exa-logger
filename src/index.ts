import dayjs from 'dayjs';
import { LogLevel } from './../types/types.d';
import chalk from 'chalk';

export class Logger {
  static log = (level: LogLevel, ...messages: any) => {
    // Log with level, and timestamp, use chalk library to colorize the log.
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
  };

  static info(...messages: any) {
    this.log('INFO', ...messages);
  }

  static warn(...messages: any) {
    this.log('WARN', ...messages);
  }

  static error(...messages: any) {
    this.log('ERROR', ...messages);
  }
}