-- CreateTable
CREATE TABLE "agent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "persona" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agentModel" (
    "id" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "agent_do" TEXT NOT NULL,
    "agent_do_not" TEXT NOT NULL,
    "agent_be" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contextId" INTEGER,

    CONSTRAINT "agentModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "context" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileData" TEXT NOT NULL,
    "fileJson" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "agentModelId" TEXT NOT NULL,

    CONSTRAINT "context_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "history" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "agentModel_agentId_key" ON "agentModel"("agentId");

-- AddForeignKey
ALTER TABLE "agentModel" ADD CONSTRAINT "agentModel_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "context" ADD CONSTRAINT "context_agentModelId_fkey" FOREIGN KEY ("agentModelId") REFERENCES "agentModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
