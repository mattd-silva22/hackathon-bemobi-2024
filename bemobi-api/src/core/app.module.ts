import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AgentsModule } from '@/agents/agents.module';

@Module({
  imports: [AgentsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
