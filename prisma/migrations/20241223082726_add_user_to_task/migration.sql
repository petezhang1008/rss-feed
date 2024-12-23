/*
  Warnings:

  - You are about to drop the `ExecuteTask` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[type,website,selector]` on the table `Rss` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ExecuteTask" DROP CONSTRAINT "ExecuteTask_rssId_fkey";

-- DropTable
DROP TABLE "ExecuteTask";

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "count" INTEGER NOT NULL,
    "rssId" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "errorReason" TEXT,
    "successCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rss_type_website_selector_key" ON "Rss"("type", "website", "selector");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_rssId_fkey" FOREIGN KEY ("rssId") REFERENCES "Rss"("id") ON DELETE CASCADE ON UPDATE CASCADE;
