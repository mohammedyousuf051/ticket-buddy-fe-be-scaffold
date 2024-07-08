import { Test, TestingModule } from '@nestjs/testing';
import { SupportEmailIntegrationsService } from './support_email_integrations.service';

describe('SupportEmailIntegrationsService', () => {
  let service: SupportEmailIntegrationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportEmailIntegrationsService],
    }).compile();

    service = module.get<SupportEmailIntegrationsService>(SupportEmailIntegrationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
