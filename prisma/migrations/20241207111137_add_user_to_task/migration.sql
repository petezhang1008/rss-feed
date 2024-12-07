/*
  Warnings:

  - You are about to drop the column `creator` on the `Feed` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Feed" DROP COLUMN "creator",
ADD COLUMN     "author" TEXT,
ADD COLUMN     "domain" TEXT,
ADD COLUMN     "image" TEXT;
