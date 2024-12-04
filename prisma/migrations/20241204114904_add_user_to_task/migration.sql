/*
  Warnings:

  - You are about to drop the column `readed` on the `ExecuteTask` table. All the data in the column will be lost.
  - Added the required column `isRead` to the `ExecuteTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExecuteTask" DROP COLUMN "readed",
ADD COLUMN     "isRead" BOOLEAN NOT NULL,
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "ExecuteTask" ADD CONSTRAINT "ExecuteTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
