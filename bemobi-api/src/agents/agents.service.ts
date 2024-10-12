import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateAgentDto,
  DeleteAgentDto,
  FindAgentDto,
} from './dtos/agents.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class AgentsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(agent: CreateAgentDto) {
    const model = this.prismaService.agentModel.findUnique({
      where: { id: agent.modelId },
    });

    if (!model) {
      throw new NotFoundException('Model not found');
    }

    const createdAgent = this.prismaService.agent.create({
      data: {
        name: agent.name,
        description: agent.description,
        persona: agent.persona,
        model: agent.modelId ? { connect: { id: agent.modelId } } : undefined,
      },
    });

    return createdAgent;
  }

  async delete(agent: DeleteAgentDto) {
    const deletedAgent = await this.prismaService.agent.delete({
      where: { id: agent.id },
      include: {
        model: {
          include: { context: true },
        },
      },
    });

    return deletedAgent;
  }

  findAll() {
    return this.prismaService.agent.findMany();
  }

  async findOne(agent: FindAgentDto) {
    const foundAgent = await this.prismaService.agent.findUnique({
      where: { id: agent.id },
      include: {
        model: {
          include: { context: true },
        },
      },
    });

    if (!foundAgent) {
      throw new NotFoundException('Agent not found');
    }

    return foundAgent;
  }
}
