/*
  Warnings:

  - Made the column `agentModelId` on table `context` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "context" DROP CONSTRAINT "context_agentModelId_fkey";

-- AlterTable
ALTER TABLE "context" ALTER COLUMN "agentModelId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "context" ADD CONSTRAINT "context_agentModelId_fkey" FOREIGN KEY ("agentModelId") REFERENCES "agentModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
