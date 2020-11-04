import { LoggerService as NestLoggerService, Injectable } from '@nestjs/common';
import { createLogger, format, Logger as WinstonLogger, transports, LoggerOptions } from 'winston';
import { LogLevel, Meta } from './logger.types';

@Injectable()
export class LoggerService implements NestLoggerService {
  private readonly logger: WinstonLogger;

  constructor(options: LoggerOptions = {}) {
    const { level, label } = {
      level: LogLevel.info,
      label: undefined,
      ...options,
    };
    this.logger = createLogger({
      level,
      format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.label({ label }),
        format.splat(),
        format.json(),
      ),
      transports: [new transports.Console()],
    });
  }

  error(message: string, trace?: string, context?: string, meta?: Meta) {
    this.logger.error(message, {
      trace,
      context,
      meta,
    });
  }

  log(message: string, context?: string, meta?: Meta) {
    this.logger.info(message, { context, meta });
  }

  warn(message: string, context?: string, meta?: Meta) {
    this.logger.warn(message, { context, meta });
  }

  debug(message: string, context?: string, meta?: Meta) {
    this.logger.debug(message, { context, meta });
  }

  verbose(message: string, context?: string, meta?: Meta) {
    this.logger.verbose(message, { context, meta });
  }
}
