/*
  Warnings:

  - You are about to drop the column `userId` on the `ExecuteTask` table. All the data in the column will be lost.
  - Made the column `rssId` on table `ExecuteTask` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ExecuteTask" DROP CONSTRAINT "ExecuteTask_rssId_fkey";

-- DropForeignKey
ALTER TABLE "ExecuteTask" DROP CONSTRAINT "ExecuteTask_userId_fkey";

-- AlterTable
ALTER TABLE "ExecuteTask" DROP COLUMN "userId",
ALTER COLUMN "isRead" SET DEFAULT false,
ALTER COLUMN "rssId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ExecuteTask" ADD CONSTRAINT "ExecuteTask_rssId_fkey" FOREIGN KEY ("rssId") REFERENCES "RssGenerator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
