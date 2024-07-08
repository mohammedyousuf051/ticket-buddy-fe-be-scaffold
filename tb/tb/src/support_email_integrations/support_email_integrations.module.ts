import { Module } from '@nestjs/common';
import { SupportEmailIntegrationsService } from './support_email_integrations.service';
import { SupportEmailIntegrationsController } from './support_email_integrations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportEmailIntegration } from './entities/support_email_integration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupportEmailIntegration])],
  controllers: [SupportEmailIntegrationsController],
  providers: [SupportEmailIntegrationsService],
})
export class SupportEmailIntegrationsModule {}
