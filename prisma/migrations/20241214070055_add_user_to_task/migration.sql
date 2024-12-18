-- AlterTable
ALTER TABLE "ExecuteTask" ADD COLUMN     "successCount" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "status" SET DEFAULT 'pending';
