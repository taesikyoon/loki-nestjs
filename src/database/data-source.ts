import { DataSourceOptions } from 'typeorm';

export const PROJECT_SRC_ROOT = `${__dirname}/../..`;

export const ormConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [`${PROJECT_SRC_ROOT}/**/*.entity.ts`],
};
