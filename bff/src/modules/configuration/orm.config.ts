import { SnakeCaseNamingStrategy } from '@bsc/typeorm-utils';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: process.env.DB_SSL === 'true' || false,
  schema: process.env.DB_SCHEMA,
  entities: [process.env.DB_ENTITIES],
  synchronize: false,
  extra: { max: 10, min: 1, ssl: process.env.DB_SSL === 'true' || false },
  namingStrategy: new SnakeCaseNamingStrategy(),
};
