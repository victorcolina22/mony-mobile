import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { LoginDto } from './login.dto';

export class RegisterDto extends LoginDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;
}
