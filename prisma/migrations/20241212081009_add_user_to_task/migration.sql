/*
  Warnings:

  - Made the column `title` on table `RssGenerator` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Feed" DROP CONSTRAINT "Feed_rssId_fkey";

-- AlterTable
ALTER TABLE "RssGenerator" ADD COLUMN     "link" TEXT,
ALTER COLUMN "title" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_rssId_fkey" FOREIGN KEY ("rssId") REFERENCES "RssGenerator"("id") ON DELETE CASCADE ON UPDATE CASCADE;
