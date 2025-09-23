import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountRequest } from './request/account.request';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() createAccountRequest: CreateAccountDto) {
    return this.accountsService.create(createAccountRequest);
  }

  @Get()
  findAll() {
    return this.accountsService.findAll();
  }

  @Get('/:id')
  findOne(@Query() accountRequest: AccountRequest) {
    return this.accountsService.findOne(accountRequest);
  }

  @Put('/:id')
  update(@Query() accountRequest: AccountRequest) {
    return this.accountsService.update(accountRequest);
  }

  @Delete('/:id')
  delete(@Query() accountRequest: AccountRequest) {
    return this.accountsService.delete(accountRequest);
  }
}
