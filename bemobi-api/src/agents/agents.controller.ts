import { Post, Body, Delete, Get, Param, Controller } from '@nestjs/common';
import { AgentsService } from './agents.service';
import {
  CreateAgentDto,
  DeleteAgentDto,
  FindAgentDto,
} from './dtos/agents.dto';

@Controller('agent')
export class AgentsController {
  constructor(private readonly agentsService: AgentsService) {}

  @Post()
  create(@Body() agent: CreateAgentDto) {
    return this.agentsService.create(agent);
  }

  @Delete(':id')
  delete(@Param() agent: DeleteAgentDto) {
    return this.agentsService.delete(agent);
  }

  @Get()
  findAll() {
    return this.agentsService.findAll();
  }

  @Get(':id')
  findOne(@Param() agent: FindAgentDto) {
    return this.agentsService.findOne(agent);
  }
}
