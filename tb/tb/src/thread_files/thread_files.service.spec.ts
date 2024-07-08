import { Test, TestingModule } from '@nestjs/testing';
import { ThreadFilesService } from './thread_files.service';

describe('ThreadFilesService', () => {
  let service: ThreadFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreadFilesService],
    }).compile();

    service = module.get<ThreadFilesService>(ThreadFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
