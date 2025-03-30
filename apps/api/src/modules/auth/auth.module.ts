import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

// Controllers
import { AuthController } from './auth.controller';

// Services
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

// Modules
import { UsersModule } from '../users/users.module';

// Entities
import { User } from '../users/entities/user.entity';

// Strategies
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '30s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
