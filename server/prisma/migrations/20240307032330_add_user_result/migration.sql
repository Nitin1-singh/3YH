/*
  Warnings:

  - You are about to drop the column `result` on the `competition` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "competition" DROP COLUMN "result";

-- CreateTable
CREATE TABLE "result_user" (
    "id" TEXT NOT NULL,
    "score" TEXT NOT NULL,
    "competitionId" TEXT,

    CONSTRAINT "result_user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "result_user" ADD CONSTRAINT "result_user_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "competition"("id") ON DELETE SET NULL ON UPDATE CASCADE;
