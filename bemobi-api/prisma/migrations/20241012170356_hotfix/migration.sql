-- DropForeignKey
ALTER TABLE "context" DROP CONSTRAINT "context_agentModelId_fkey";

-- AlterTable
ALTER TABLE "context" ALTER COLUMN "agentModelId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "context" ADD CONSTRAINT "context_agentModelId_fkey" FOREIGN KEY ("agentModelId") REFERENCES "agentModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
