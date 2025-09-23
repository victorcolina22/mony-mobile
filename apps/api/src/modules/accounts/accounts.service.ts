import { Account } from './entities/account.entity';
import { AccountRequest } from './request/account.request';
import { CreateAccountDto } from './dto/create-account.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountsRepository: Repository<Account>
  ) {}

  async create(createAccountRequest: CreateAccountDto) {
    return this.accountsRepository.save(createAccountRequest);
  }

  findAll() {
    return this.accountsRepository.find();
  }

  findOne(accountRequest: AccountRequest) {
    const { id } = accountRequest;

    const account = this.accountsRepository.findOne({
      where: {
        id,
      },
    });
    if (!account)
      throw new NotFoundException(`Account with id ${id} not found`);

    return account;
  }

  update(accountRequest: AccountRequest) {
    const { id } = accountRequest;

    const account = this.accountsRepository.findOne({
      where: {
        id,
      },
    });
    if (!account)
      throw new NotFoundException(`Account with id ${id} not found`);
    return this.accountsRepository.update(
      { id },
      account as QueryDeepPartialEntity<Account>
    );
  }

  delete(accountRequest: AccountRequest) {
    const { id } = accountRequest;
    this.accountsRepository.delete({ id });
    return `Account with id ${id} deleted`;
  }
}
