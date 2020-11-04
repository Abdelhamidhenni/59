import { Injectable } from '@nestjs/common';

import { ApiConfiguration } from './configuration.interfaces';

@Injectable()
export class ConfigurationService {
  private configuration: ApiConfiguration;

  constructor(configuration: ApiConfiguration) {
    this.configuration = configuration;
  }

  getBoolean(key: string, defaultValue?: boolean): boolean | undefined {
    return typeof process.env[key] !== 'undefined' ? process.env[key] === 'true' : defaultValue;
  }

  getString(key: string, defaultValue?: string): string | undefined {
    return typeof process.env[key] !== 'undefined' ? process.env[key] : defaultValue;
  }

  getNumber(key: string, defaultValue?: number): number | undefined {
    return typeof process.env[key] !== 'undefined' ? parseInt(process.env[key]) : defaultValue;
  }

  getPort(): number {
    return this.configuration.port;
  }

  getGlobalPrefix(): string {
    return this.configuration.globalPrefix;
  }
}
