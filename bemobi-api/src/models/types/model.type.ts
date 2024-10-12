import { TContext } from '@/context/types/context.type';

export class TModel {
  id: string;
  agentId: string;
  name: string;
  agent_do: string;
  agent_do_not: string;
  agent_be: string;
  context: TContext[];
}
