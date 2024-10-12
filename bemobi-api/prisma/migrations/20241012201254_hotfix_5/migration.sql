/*
  Warnings:

  - Added the required column `agentId` to the `session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "session" ADD COLUMN     "agentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
