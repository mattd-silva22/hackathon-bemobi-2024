import { PrismaService } from '@/prisma/prisma.service';
import { CreateModelDto } from './dto/models.dto';

export class ModelService {
  constructor(private prismaService: PrismaService) {}

  async create(model: CreateModelDto) {
    return await this.prismaService.agentModel.create({
      data: {
        agentId: model.agentId,
        name: model.name,
        agent_do: model.agent_do,
        agent_do_not: model.agent_do_not,
        agent_be: model.agent_be,
      },
    });
  }
}
