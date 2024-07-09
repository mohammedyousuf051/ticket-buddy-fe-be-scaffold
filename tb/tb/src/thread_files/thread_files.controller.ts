import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ThreadFilesService } from './thread_files.service';
import { CreateThreadFileDto } from './dto/create-thread_file.dto';

@Controller('thread-files')
export class ThreadFilesController {
  constructor(private readonly threadFilesService: ThreadFilesService) {}

  @Post()
  create(@Body() createThreadFileDto: CreateThreadFileDto) {
    return this.threadFilesService.create(createThreadFileDto);
  }

  @Get(':threadId')
  findAll(@Param('threadId') threadId: string) {
    return this.threadFilesService.findAllByThreadId(threadId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.threadFilesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.threadFilesService.remove(id);
  }
}
