import { IsString, IsNumber, IsBoolean, IsEmail } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('thread')
export class Thread {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar', { default: '' })
  @IsString()
  content: string;

  @Column('varchar')
  @IsEmail()
  fromEmail: string;

  @Column('varchar')
  @IsEmail()
  toEmail: string;

  @Column('int')
  @IsNumber()
  orderSeq: number;

  @Column('boolean', { default: false })
  @IsBoolean()
  isEdited: boolean;

  @Column('boolean', { default: false })
  @IsBoolean()
  isBelongToMLAgent: boolean;

  @Column('boolean', { default: false })
  @IsBoolean()
  isDeleted: boolean;

  //TODO: foregin key mapper
  @Column('uuid')
  ticketId: string;

  //TODO: foregin key mapper
  @Column('uuid')
  projectId: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}
