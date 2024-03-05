/*
  Warnings:

  - Added the required column `photo` to the `competition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "competition" ADD COLUMN     "photo" TEXT NOT NULL,
ALTER COLUMN "test_data" SET DATA TYPE TEXT,
ALTER COLUMN "train_data" SET DATA TYPE TEXT;
