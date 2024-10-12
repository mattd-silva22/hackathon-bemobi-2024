import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Criar um agente
  const agent = await prisma.agent.create({
    data: {
      id: '123e4567-e89b-12d3-a456-426614174000', // Exemplo de UUID, pode ser gerado dinamicamente
      name: 'Agente 001',
      description: 'Agente responsável por suporte técnico',
      persona: 'Amigável e profissional',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // Criar um agentModel associado ao agente e contexto criado
  const agentModel = await prisma.agentModel.create({
    data: {
      name: 'Suporte Técnico',
      agent_do: 'Responde a perguntas sobre produtos',
      agent_do_not: 'Não realiza vendas diretas',
      agent_be: 'Profissional e eficiente',
      agent: {
        connect: {
          id: agent.id,
        },
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // Criar um context
  const context = await prisma.context.create({
    data: {
      name: 'Suporte Técnico Manual',
      fileName: 'manual_suporte.pdf',
      fileData: 'base64-data-here', // Exemplo de dados binários
      fileJson: '{"key": "value"}', // Exemplo de JSON associado ao contexto
      description: 'Contexto de suporte técnico para produtos de TI',
      agentModel: {
        connect: { id: agentModel.id }, // Conectar o context ao agentModel
      },
    },
  });

  console.log('Seed executado com sucesso.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
