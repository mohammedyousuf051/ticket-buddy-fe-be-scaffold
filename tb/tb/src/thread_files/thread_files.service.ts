import { Injectable } from '@nestjs/common';
import { CreateThreadFileDto } from './dto/create-thread_file.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ThreadFile } from './entities/thread_file.entity';

@Injectable()
export class ThreadFilesService {
  constructor(
    @InjectRepository(ThreadFile)
    private threadRepository: Repository<ThreadFile>,
  ) {}

  create(createThreadFileDto: CreateThreadFileDto) {
    return this.threadRepository.save(createThreadFileDto);
  }

  findAllByThreadId(threadId: string) {
    return this.threadRepository.find({ where: { threadId } });
  }

  findOne(id: string) {
    return this.threadRepository.findOneByOrFail({ id });
  }

  remove(id: string) {
    return this.threadRepository.update({ id }, { isDeleted: true });
  }
}
