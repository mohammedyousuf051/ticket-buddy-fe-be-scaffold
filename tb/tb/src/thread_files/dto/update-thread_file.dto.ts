import { PartialType } from '@nestjs/mapped-types';
import { CreateThreadFileDto } from './create-thread_file.dto';

export class UpdateThreadFileDto extends PartialType(CreateThreadFileDto) {}
