/*
  Warnings:

  - You are about to drop the column `link` on the `RssGenerator` table. All the data in the column will be lost.
  - You are about to drop the column `rssUrl` on the `RssGenerator` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RssGenerator" DROP COLUMN "link",
DROP COLUMN "rssUrl",
ADD COLUMN     "author" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "keywords" TEXT;
