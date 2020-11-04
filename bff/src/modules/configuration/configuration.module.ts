import { Module } from '@nestjs/common';
import apiConfig from './api.config';
import { ConfigurationService } from './configuration.service';

@Module({
  exports: [ConfigurationService],
  providers: [
    {
      provide: ConfigurationService,
      useValue: new ConfigurationService(apiConfig),
    },
  ],
})
export class ConfigurationModule {}
