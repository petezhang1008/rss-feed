/*
  Warnings:

  - Added the required column `rssId` to the `Feed` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feed" ADD COLUMN     "rssId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_rssId_fkey" FOREIGN KEY ("rssId") REFERENCES "RssGenerator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
