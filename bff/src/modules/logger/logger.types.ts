/* eslint-disable @typescript-eslint/no-explicit-any */
export enum LogLevel {
  debug = 'debug',
  info = 'info',
  warn = 'warn',
  error = 'error',
  verbose = 'verbose',
}

export interface LoggerOptions {
  level?: LogLevel;
  label?: string;
}

export type Meta = { [key: string]: any | any[] };

export interface LoggerService {
  log(message: any, meta?: Meta): any;
  error(message: any, trace?: string, context?: string, meta?: Meta): any;
  warn(message: any, context?: string, meta?: Meta): any;
  debug?(message: any, context?: string, meta?: Meta): any;
  verbose?(message: any, context?: string, meta?: Meta): any;
}
