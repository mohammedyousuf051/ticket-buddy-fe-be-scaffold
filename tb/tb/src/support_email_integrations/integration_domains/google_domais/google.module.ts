import { Module } from '@nestjs/common';
import { GoogleDomainController } from './google.controller';

@Module({
  imports: [],
  controllers: [GoogleDomainController],
  providers: [],
})
export class GoogleDomainModule {}
