import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportEmailIntegrationsModule } from './support_email_integrations/support_email_integrations.module';
import { ProjectsModule } from './projects/projects.module';
import { ThreadFilesModule } from './thread_files/thread_files.module';
import { ThreadsModule } from './threads/threads.module';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';
import { GoogleDomainModule } from './support_email_integrations/integration_domains/google_domais/google.module';
import { datasource } from './config/data-source';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'postgres',
      }),
      dataSourceFactory: async () => datasource,
      inject: [ConfigService],
    }),
    UsersModule,
    TicketsModule,
    ThreadsModule,
    ThreadFilesModule,
    ProjectsModule,
    SupportEmailIntegrationsModule,
    GoogleDomainModule,
    // TypeOrmModule.forRoot({
    //   type: process.env.DB_TYPE as any,
    //   host: process.env.PG_HOST,
    //   port: parseInt(process.env.PG_PORT),
    //   username: process.env.PG_USER,
    //   password: process.env.PG_PASSWORD,
    //   database: process.env.PG_DB,
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
