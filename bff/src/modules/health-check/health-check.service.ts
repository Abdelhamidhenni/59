import { Injectable } from '@nestjs/common';
import { TerminusEndpoint, TerminusModuleOptions, TerminusOptionsFactory } from '@nestjs/terminus';
import { ApiHealthIndicator } from '../../api.health';
import apiConfig from '../configuration/api.config';
@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {
  constructor(private readonly api: ApiHealthIndicator) {}

  createTerminusOptions(): TerminusModuleOptions {
    const healthEndpoint: TerminusEndpoint = {
      url: `${apiConfig.globalPrefix}/healthcheck`,
      healthIndicators: [async () => this.api.isHealthy()],
    };
    return {
      endpoints: [healthEndpoint],
    };
  }
}
