import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

// Services
import { AuthService } from './auth.service';

// DTOs
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

// Guards
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

  // example of how to use the jwt guard to protect a route
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return 'Hello World!';
  }
}
