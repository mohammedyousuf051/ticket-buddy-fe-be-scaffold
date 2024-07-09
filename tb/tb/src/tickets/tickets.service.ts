import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  create(createTicketDto: CreateTicketDto) {
    return this.ticketRepository.save(createTicketDto);
  }

  findAll() {
    return this.ticketRepository.find();
  }

  findOne(id: string) {
    return this.ticketRepository.findOneByOrFail({ id });
  }

  update(id: string, updateTicketDto: UpdateTicketDto) {
    return this.ticketRepository.update({ id }, updateTicketDto);
  }

  remove(id: string) {
    return this.ticketRepository.update({ id }, { isDeleted: true });
  }
}
