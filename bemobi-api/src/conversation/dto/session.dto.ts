import { IsNotEmpty, IsString } from 'class-validator';

export class CloseSessionDto {
  @IsNotEmpty()
  @IsString()
  sessionId: string;
}

export class OpenSessionDto {
  @IsNotEmpty()
  @IsString()
  agentId: string;
}

export class SendMessageDto {
  @IsNotEmpty()
  @IsString()
  sessionId: string;
  @IsNotEmpty()
  @IsString()
  message: string;
}
