import { ApiConfiguration } from './configuration.interfaces';

// This file centralizes the global configuration of the API.
// Configuration that depends on the environment (dev, uat, prod...) must be taken
// from environment variables (process.env.XXX)

const configuration: ApiConfiguration = {
  globalPrefix: 'api',
  port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 9999,
};

export default configuration;
