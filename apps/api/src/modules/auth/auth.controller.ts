import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';

import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() loginRequest: LoginDto) {
    return this.authService.login(loginRequest);
  }

  @Post('register')
  register(@Body() registerRequest: CreateUserDto) {
    return this.authService.register(registerRequest);
  }

  @Get('validateToken/:token')
  validateToken(@Param('token') token: string) {
    return this.authService.validateToken(token);
  }

  // example of how to use the jwt guard to protect a route
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return 'Hello World!';
  }
}
