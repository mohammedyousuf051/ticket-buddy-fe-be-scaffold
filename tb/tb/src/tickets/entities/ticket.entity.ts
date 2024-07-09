import {
  IsString,
  MinLength,
  MaxLength,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { TicketStatus } from '../../utils/enums/ticket.status.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ticket')
export class Ticket {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar')
  @IsString()
  @MinLength(0)
  @MaxLength(500)
  name: string;

  @Column('varchar', { default: '' })
  @IsString()
  description: string;

  @Column('varchar')
  status: TicketStatus;

  @Column('jsonb', { nullable: true })
  tags?: string[];

  @Column('int')
  @IsNumber()
  currentThreadOrderSeq: number;

  @Column('boolean', { default: false })
  @IsBoolean()
  isDeleted: boolean;

  //TODO: foregin key mapper
  @Column('uuid')
  userId: string;

  //TODO: foregin key mapper
  @Column('uuid')
  supportEmailId: string;

  //TODO: foregin key mapper
  @Column('uuid')
  projectId: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}
