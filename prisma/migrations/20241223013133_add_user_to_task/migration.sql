-- DropForeignKey
ALTER TABLE "ExecuteTask" DROP CONSTRAINT "ExecuteTask_rssId_fkey";

-- AddForeignKey
ALTER TABLE "ExecuteTask" ADD CONSTRAINT "ExecuteTask_rssId_fkey" FOREIGN KEY ("rssId") REFERENCES "RssGenerator"("id") ON DELETE CASCADE ON UPDATE CASCADE;
