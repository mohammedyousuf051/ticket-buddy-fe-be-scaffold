import { Test, TestingModule } from '@nestjs/testing';
import { SupportEmailIntegrationsController } from './support_email_integrations.controller';
import { SupportEmailIntegrationsService } from './support_email_integrations.service';

describe('SupportEmailIntegrationsController', () => {
  let controller: SupportEmailIntegrationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupportEmailIntegrationsController],
      providers: [SupportEmailIntegrationsService],
    }).compile();

    controller = module.get<SupportEmailIntegrationsController>(
      SupportEmailIntegrationsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
