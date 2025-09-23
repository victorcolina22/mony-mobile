import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';

import { AccountsService } from '../accounts/accounts.service';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

import { UsersModule } from '../users/users.module';

import { Account } from '../accounts/entities/account.entity';
import { User } from '../users/entities/user.entity';

import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AccountsModule } from '../accounts/accounts.module';

@Module({
  imports: [
    UsersModule,
    AccountsModule,
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Account]),
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '30s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    AccountsService,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}
