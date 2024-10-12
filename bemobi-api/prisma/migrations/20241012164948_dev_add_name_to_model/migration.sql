/*
  Warnings:

  - Added the required column `name` to the `agentModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "agentModel" ADD COLUMN     "name" TEXT NOT NULL;
