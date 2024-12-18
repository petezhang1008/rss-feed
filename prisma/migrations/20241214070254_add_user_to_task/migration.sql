/*
  Warnings:

  - You are about to drop the column `rssGeneratorId` on the `ExecuteTask` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExecuteTask" DROP CONSTRAINT "ExecuteTask_rssGeneratorId_fkey";

-- AlterTable
ALTER TABLE "ExecuteTask" DROP COLUMN "rssGeneratorId",
ADD COLUMN     "rssId" TEXT;

-- AddForeignKey
ALTER TABLE "ExecuteTask" ADD CONSTRAINT "ExecuteTask_rssId_fkey" FOREIGN KEY ("rssId") REFERENCES "RssGenerator"("id") ON DELETE SET NULL ON UPDATE CASCADE;
