"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ExaLogger: () => ExaLogger
});
module.exports = __toCommonJS(src_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_chalk = __toESM(require("chalk"));
var log = (level, ...messages) => {
  const logData = [];
  const date = (0, import_dayjs.default)().format("YYYY-MM-DD HH:mm:ss");
  logData.push(`[${import_chalk.default.gray(date)}]`);
  switch (level) {
    case "INFO":
      logData.push(`${import_chalk.default.blue.bold(level)}`);
      break;
    case "WARN":
      logData.push(`${import_chalk.default.yellow.bold(level)}`);
      break;
    case "ERROR":
      logData.push(`${import_chalk.default.red.bold(level)}`);
      break;
    default:
      logData.push(`${import_chalk.default.blue.bold(level)}`);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ExaLogger
});
