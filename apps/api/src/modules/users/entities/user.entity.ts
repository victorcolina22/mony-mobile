import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'USER',
})
export class User {
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
}
