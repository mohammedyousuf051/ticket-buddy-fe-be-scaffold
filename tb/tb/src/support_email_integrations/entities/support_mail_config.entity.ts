import { IsString } from 'class-validator';
import {
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

@Entity('support_email_config')
export class SupportEmailConfig {
  @PrimaryColumn('uuid')
  id: string;

  //TODO: foregin key mapper
  @Column('uuid')
  supportEmailId: string;

  @Column('varchar', { default: '' })
  @IsString()
  isCustomDomian: string;

  @Column('jsonb')
  tokenDetails: Record<string, unknown>;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}
