import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// Config
import { EnvConfiguration } from './config/env.config';
import { TypeOrmFactory } from './config/typeorm.factory';

// Modules
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [TypeOrmFactory, EnvConfiguration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => TypeOrmFactory(),
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
