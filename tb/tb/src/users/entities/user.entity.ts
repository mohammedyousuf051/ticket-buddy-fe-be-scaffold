import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

@Entity('user')
export class User {
  @PrimaryColumn('uuid')
  id: string;

  //TODO: foregin key mapper
  @Column('varchar', {
    length: 500,
    nullable: true,
  })
  @IsString()
  @MinLength(0)
  @MaxLength(500)
  keycloakId?: string;

  @Column('varchar', { length: 500, default: '' })
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  firstName: string;

  @Column('varchar', { default: '' })
  @IsString()
  displayName: string;

  @Column('varchar', { length: 500, default: '' })
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  lastName: string;

  @Column('varchar', { length: 1024 })
  @IsEmail()
  @MaxLength(1024)
  email: string;

  @Column('varchar', { nullable: true })
  @IsString()
  @MinLength(1)
  @MaxLength(1024)
  title?: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}
