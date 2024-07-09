import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SupportEmailIntegrationsService } from './support_email_integrations.service';
import { CreateSupportEmailIntegrationDto } from './dto/create-support_email_integration.dto';

@Controller('support-email-integrations')
export class SupportEmailIntegrationsController {
  constructor(
    private readonly supportEmailIntegrationsService: SupportEmailIntegrationsService,
  ) {}

  @Post()
  create(
    @Body() createSupportEmailIntegrationDto: CreateSupportEmailIntegrationDto,
  ) {
    return this.supportEmailIntegrationsService.create(
      createSupportEmailIntegrationDto,
    );
  }

  @Get()
  findAll() {
    return this.supportEmailIntegrationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supportEmailIntegrationsService.findOne(id);
  }
}
