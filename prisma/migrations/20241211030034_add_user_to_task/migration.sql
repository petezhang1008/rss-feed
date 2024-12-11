-- AlterTable
ALTER TABLE "Feed" ADD COLUMN     "bundleId" TEXT;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_bundleId_fkey" FOREIGN KEY ("bundleId") REFERENCES "Bundle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
