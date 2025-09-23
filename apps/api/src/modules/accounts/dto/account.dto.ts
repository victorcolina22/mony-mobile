import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class AccountDto {
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

  @IsOptional()
  @IsDate()
  created_at: Date;

  @IsOptional()
  @IsDate()
  updated_at: Date;
}
