import { IsNumber } from 'class-validator';

export class AccountRequest {
  @IsNumber()
  id: number;
}
