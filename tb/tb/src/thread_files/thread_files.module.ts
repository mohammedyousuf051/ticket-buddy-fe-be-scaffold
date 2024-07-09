import { Module } from '@nestjs/common';
import { ThreadFilesService } from './thread_files.service';
import { ThreadFilesController } from './thread_files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThreadFile } from './entities/thread_file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ThreadFile])],
  controllers: [ThreadFilesController],
  providers: [ThreadFilesService],
})
export class ThreadFilesModule {}
