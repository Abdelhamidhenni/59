import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiHealthIndicator } from './api.health';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { ormconfig } from './modules/configuration/orm.config';
import { TerminusOptionsService } from './modules/health-check/health-check.service';
import { LoggerModule } from './modules/logger/logger.module';
import { LogLevel } from './modules/logger/logger.types';
import { MunicipalitiesModule } from './modules/municipalities/municipalities.module';

@Module({
  imports: [
    LoggerModule.register({
      level: (process.env.LOG_LEVEL as LogLevel) || LogLevel.info,
      label: process.env.LOG_LABEL,
    }),
    ConfigurationModule,
    TypeOrmModule.forRoot(ormconfig),
    TerminusModule.forRootAsync({
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      imports: [AppModule],
      useClass: TerminusOptionsService,
    }),
    MunicipalitiesModule,
  ],
  providers: [ApiHealthIndicator],
  exports: [ApiHealthIndicator],
})
export class AppModule {}
