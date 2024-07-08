import { Test, TestingModule } from '@nestjs/testing';
import { ThreadFilesController } from './thread_files.controller';
import { ThreadFilesService } from './thread_files.service';

describe('ThreadFilesController', () => {
  let controller: ThreadFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThreadFilesController],
      providers: [ThreadFilesService],
    }).compile();

    controller = module.get<ThreadFilesController>(ThreadFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
