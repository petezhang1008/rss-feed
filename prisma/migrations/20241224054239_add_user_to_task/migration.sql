/*
  Warnings:

  - You are about to drop the column `category` on the `Rss` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Rss" DROP COLUMN "category",
ADD COLUMN     "categoryId" TEXT,
ALTER COLUMN "selector" SET DEFAULT '';

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rss" ADD CONSTRAINT "Rss_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
