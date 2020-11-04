const SnakeNamingStrategy = require('typeorm-naming-strategies').SnakeNamingStrategy;

module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    schema: process.env.DB_SCHEMA,
    entities: [process.env.DB_ENTITIES],
    ssl: process.env.DB_SSL === 'true' || false,
    synchronize: false,
    extra: { max: 10, min: 1, ssl: process.env.DB_SSL === 'true' || false },
    migrations: [process.env.DB_MIGRATIONS],
    seeds: [process.env.DB_SEEDERS],
    cli: {
      migrationsDir: process.env.DB_MIGRATIONS_DIR,
    },
    namingStrategy: new SnakeNamingStrategy(),
  },
  {
    name: 'seeds',
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    schema: process.env.DB_SCHEMA,
    entities: [process.env.DB_ENTITIES],
    ssl: process.env.DB_SSL === 'true' || false,
    synchronize: false,
    extra: { max: 10, min: 1, ssl: process.env.DB_SSL === 'true' || false },
    migrationsTableName: 'seeds',
    migrations: [process.env.DB_SEEDS],
    cli: {
      migrationsDir: process.env.DB_SEEDS_DIR,
    },
    namingStrategy: new SnakeNamingStrategy(),
  },
];
