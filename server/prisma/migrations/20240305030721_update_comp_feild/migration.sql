-- AlterTable
ALTER TABLE "competition" ADD COLUMN     "result" TEXT[],
ALTER COLUMN "start_date" SET DEFAULT CURRENT_TIMESTAMP;
