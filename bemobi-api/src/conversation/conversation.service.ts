import { PrismaService } from '@/prisma/prisma.service';
import {
  CloseSessionDto,
  OpenSessionDto,
  SendMessageDto,
} from './dto/session.dto';
import { NotFoundException } from '@nestjs/common';

export class ConversationService {
  constructor(private prismaService: PrismaService) {}

  async openSessions(session: OpenSessionDto) {
    const openSession = await this.prismaService.session.create({
      data: {
        agent: {
          connect: {
            id: session.agentId,
          },
        },
      },
    });
    return openSession;
  }

  async closeSession(session: CloseSessionDto) {
    await this.prismaService.session.update({
      where: { id: session.sessionId },
      data: {
        active: false,
      },
    });
    return session;
  }

  async getSession(sessionId: string) {
    const session = await this.prismaService.session.findUnique({
      where: { id: sessionId },
    });
    return session;
  }

  async sendMessage(data: SendMessageDto) {
    const { sessionId, message } = data;
    const session = await this.prismaService.session.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    if (!session.active) {
      throw new NotFoundException('Session is closed');
    }

    const fullHistory = await this.prismaService.history.findMany({
      where: { sessionId: sessionId },
      orderBy: { createdAt: 'desc' },
    });

    await this.prismaService.history.create({
      data: {
        session: {
          connect: {
            id: sessionId,
          },
        },
        message: message,
        role: 'USER',
      },
    });
  }
}
