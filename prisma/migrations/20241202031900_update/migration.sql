/*
  Warnings:

  - You are about to drop the column `lastUpdate` on the `RssGenerator` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RssGenerator" DROP COLUMN "lastUpdate",
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "frequency" DROP NOT NULL;
