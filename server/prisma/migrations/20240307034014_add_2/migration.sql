/*
  Warnings:

  - You are about to drop the `result_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "result_user" DROP CONSTRAINT "result_user_competitionId_fkey";

-- AlterTable
ALTER TABLE "competition" ADD COLUMN     "result" TEXT[];

-- DropTable
DROP TABLE "result_user";
