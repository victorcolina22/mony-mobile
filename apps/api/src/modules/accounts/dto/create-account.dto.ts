import { IsNumber, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsNumber()
  user_id: number;

  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  currency: string;

  @IsNumber()
  balance: number;
}
