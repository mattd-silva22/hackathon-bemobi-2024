import { Body, Controller, Post } from '@nestjs/common';
import { CreateModelDto } from './dto/models.dto';
import { ModelService } from './models.service';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Post()
  create(@Body() model: CreateModelDto) {
    return this.modelService.create(model);
  }
}
