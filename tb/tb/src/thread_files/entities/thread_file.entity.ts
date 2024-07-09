import { IsBoolean, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('thread_file')
export class ThreadFile {
  @PrimaryColumn('uuid')
  id: string;

  //TODO: foregin key mapper
  @Column('varchar')
  @IsString()
  threadId: string;

  @Column('varchar')
  @IsString()
  url: string;

  @Column('varchar', { default: '' })
  @IsString()
  fileName: string;

  @Column('varchar', { default: '' })
  @IsString()
  fileType: string;

  @Column('boolean', { default: false })
  @IsBoolean()
  isDeleted: boolean;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}
