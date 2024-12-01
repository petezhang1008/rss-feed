-- AlterTable
ALTER TABLE "RssGenerator" ADD COLUMN     "frequency" TEXT NOT NULL DEFAULT 'daily',
ADD COLUMN     "lastExecuteAt" TIMESTAMP(3);
