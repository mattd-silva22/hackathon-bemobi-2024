import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateAgentDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  persona: string;
  @IsOptional()
  @IsString()
  @IsUUID()
  modelId: string;
}

export class DeleteAgentDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
}

export class FindAgentDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
}
