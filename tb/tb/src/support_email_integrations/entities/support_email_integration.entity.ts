import { IsString, MinLength, MaxLength, IsEmail } from 'class-validator';
import {
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

@Entity('support_email_integration')
export class SupportEmailIntegration {
  @PrimaryColumn('uuid')
  id: string;

  //TODO: foregin key mapper
  @Column('uuid')
  userId: string;

  @Column('varchar', { default: '' })
  @IsString()
  displayName: string;

  @Column('varchar', { length: 1024, nullable: true })
  @IsEmail()
  @MaxLength(1024)
  supportEmail: string;

  @Column({ default: '' })
  @IsString()
  @MinLength(1)
  @MaxLength(1024)
  companyName: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}
