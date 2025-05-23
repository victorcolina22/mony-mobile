import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

// DTOs
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

// Services
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(
        'No existe una cuenta asociada a este correo'
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new BadRequestException('Contraseña incorrecta');
    }

    const { password: userPassword, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async login(loginDto: LoginDto) {
    const emailParsedToLowerCase = loginDto.email.toLowerCase();
    const user = await this.validateUser(
      emailParsedToLowerCase,
      loginDto.password
    );

    const payload = { userId: user.id, email: user.email, name: user.name };
    const access_token = this.jwtService.sign(payload);

    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      access_token,
    };

    return userData;
  }

  async register(registerDto: CreateUserDto) {
    const user = await this.usersService.findOneByEmail(registerDto.email);
    if (user) {
      throw new BadRequestException('Este correo ya está registrado');
    }

    registerDto.email = registerDto.email.toLowerCase();

    const registerUserData = {
      ...registerDto,
      password: await bcrypt.hash(registerDto.password, 10),
    };

    const newUser = await this.usersService.create(registerUserData);

    const payload = {
      userId: newUser.id,
      email: newUser.email,
      name: newUser.name,
    };
    const access_token = this.jwtService.sign(payload);

    const userData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      access_token,
    };

    return userData;
  }
}
