import { Injectable } from '@nestjs/common';
import { CreateSupportEmailIntegrationDto } from './dto/create-support_email_integration.dto';
import { SupportEmailIntegration } from './entities/support_email_integration.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SupportEmailIntegrationsService {
  constructor(
    @InjectRepository(SupportEmailIntegration)
    private supportEmailRepository: Repository<SupportEmailIntegration>,
  ) {}

  async create(
    createSupportEmailIntegrationDto: CreateSupportEmailIntegrationDto,
  ) {
    return this.supportEmailRepository.save(createSupportEmailIntegrationDto);
  }

  async findAll() {
    return this.supportEmailRepository.find();
  }

  async findOne(id: string) {
    return this.supportEmailRepository.findOneByOrFail({ id });
  }
}
