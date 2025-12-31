import { CommonEntity } from 'src/common/entities';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'ACCOUNTS',
})
export class Account extends CommonEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
    primaryKeyConstraintName: 'PK_ACCOUNT',
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
    name: 'type',
    type: 'varchar',
    nullable: false,
    length: 50,
  })
  type: string;

  @Column({
    name: 'currency',
    type: 'varchar',
    nullable: false,
    length: 50,
  })
  currency: string;

  @Column({
    name: 'balance',
    type: 'int',
    nullable: false,
  })
  balance: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({
    name: 'user_id',
    foreignKeyConstraintName: 'FK_ACCOUNT_USER',
  })
  user_id: number;
}
