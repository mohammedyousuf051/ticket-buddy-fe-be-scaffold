import { Injectable } from '@nestjs/common';
import { CreateThreadDto } from './dto/create-thread.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Thread } from './entities/thread.entity';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(Thread)
    private threadRepository: Repository<Thread>,
  ) {}

  create(createThreadDto: CreateThreadDto) {
    return this.threadRepository.save(createThreadDto);
  }

  findAll() {
    return this.threadRepository.find();
  }

  findOne(id: string) {
    return this.threadRepository.findOneByOrFail({ id });
  }
}
