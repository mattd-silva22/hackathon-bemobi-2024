import { TModel } from '@/models/types/model.type';

export type TAgent = {
  id: string;
  name: string;
  description: string;
  persona: string;
  model?: TModel;
};
