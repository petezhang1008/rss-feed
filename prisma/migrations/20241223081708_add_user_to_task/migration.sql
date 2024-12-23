/*
  Warnings:

  - You are about to drop the `RssGenerator` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExecuteTask" DROP CONSTRAINT "ExecuteTask_rssId_fkey";

-- DropForeignKey
ALTER TABLE "Feed" DROP CONSTRAINT "Feed_rssId_fkey";

-- DropForeignKey
ALTER TABLE "RssGenerator" DROP CONSTRAINT "RssGenerator_bundleId_fkey";

-- DropForeignKey
ALTER TABLE "RssGenerator" DROP CONSTRAINT "RssGenerator_userId_fkey";

-- DropTable
DROP TABLE "RssGenerator";

-- CreateTable
CREATE TABLE "Rss" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT,
    "description" TEXT,
    "image" TEXT,
    "author" TEXT,
    "keywords" TEXT,
    "selector" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "lastExecuteAt" TIMESTAMP(3),
    "frequency" TEXT DEFAULT 'hourly',

    CONSTRAINT "Rss_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRss" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rssId" TEXT NOT NULL,
    "bundleId" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRss_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_rssId_fkey" FOREIGN KEY ("rssId") REFERENCES "Rss"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExecuteTask" ADD CONSTRAINT "ExecuteTask_rssId_fkey" FOREIGN KEY ("rssId") REFERENCES "Rss"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRss" ADD CONSTRAINT "UserRss_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRss" ADD CONSTRAINT "UserRss_rssId_fkey" FOREIGN KEY ("rssId") REFERENCES "Rss"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRss" ADD CONSTRAINT "UserRss_bundleId_fkey" FOREIGN KEY ("bundleId") REFERENCES "Bundle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
