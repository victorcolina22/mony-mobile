import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmFactory = (): TypeOrmModuleOptions => {
  const dbConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: String(process.env.DB_PASSWORD),
    autoLoadEntities: true,
    synchronize: true,
  };

  return dbConfig as TypeOrmModuleOptions;
};
