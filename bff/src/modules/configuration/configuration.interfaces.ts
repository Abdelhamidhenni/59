export interface ConfigurationService {
  getBoolean(key: string, defaultValue?: boolean): boolean | undefined;
  getString(key: string, defaultValue?: string): string | undefined;
  getNumber(key: string, defaultValue?: number): number | undefined;
  getPort(): number;
  getGlobalPrefix(): string;
}

export interface ApiConfiguration {
  globalPrefix: string;
  port: number;
  [key: string]: string | boolean | number;
}
