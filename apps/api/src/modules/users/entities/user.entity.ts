import { CommonEntity } from 'src/common/entities';
import { Account } from 'src/modules/accounts/entities/account.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'USERS',
})
export class User extends CommonEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
    primaryKeyConstraintName: 'PK_USER',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false,
    length: 50,
  })
  name: string;

  @Column({
    name: 'username',
    type: 'varchar',
    nullable: false,
    length: 50,
  })
  username: string;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: false,
    length: 250,
  })
  email: string;

  @Column({
    name: 'password',
    type: 'varchar',
    nullable: false,
    length: 250,
  })
  password: string;

  @OneToMany(() => Account, account => account.id)
  @JoinColumn({
    name: 'account_id',
    foreignKeyConstraintName: 'FK_USER_ACCOUNT',
  })
  account_id: number;
}
