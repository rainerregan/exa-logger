"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    static info(...messages) {
        this.log('INFO', ...messages);
    }
    static warn(...messages) {
        this.log('WARN', ...messages);
    }
    static error(...messages) {
        this.log('ERROR', ...messages);
    }
}
exports.Logger = Logger;
Logger.log = (level, ...messages) => {
    // Log with level, and timestamp, use chalk library to colorize the log.
    const logData = [];
    const date = (0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss');
    logData.push(`[${chalk_1.default.gray(date)}]`);
    switch (level) {
        case 'INFO':
            logData.push(`${chalk_1.default.blue.bold(level)}`);
            break;
        case 'WARN':
            logData.push(`${chalk_1.default.yellow.bold(level)}`);
            break;
        case 'ERROR':
            logData.push(`${chalk_1.default.red.bold(level)}`);
            break;
        default:
            logData.push(`${chalk_1.default.blue.bold(level)}`);
            break;
    }
    logData.push(":");
    logData.push(...messages);
    console.log(...logData);
};
