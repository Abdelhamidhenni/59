import { Module, DynamicModule } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerOptions } from './logger.types';

@Module({})
export class LoggerModule {
  static register(options: LoggerOptions): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LoggerService,
          useValue: new LoggerService(options),
        },
      ],
      exports: [LoggerService],
    };
  }
}
