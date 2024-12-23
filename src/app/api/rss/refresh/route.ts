import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendResponse } from "@/lib/http-server"
import { TaskResult } from "@/services/task-service"
import { RssService } from "@/services/rss-service"
import { RssTaskService } from "@/services/rss-task-service"
import { NextRequest } from "next/server"
import { ErrorData, ResponseType } from '@/lib/http-server.interface';

const rssTaskService = injectService<RssTaskService>(RssTaskService)
const rssGeneratorService = injectService<RssService>(RssService)
export async function GET(req: NextRequest): ResponseType<TaskResult> {
    const rssId: string | null = req.nextUrl.searchParams.get('rssId')
    if (!rssId) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    const rss = await rssGeneratorService.getRss(rssId)
    if (!rss) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    const result = await rssTaskService?.consumeRssTask(rss!)
    if (!result) {
        return sendError<ErrorData>(404, ErrorCode.NOT_FOUND)
    }
    return sendResponse<TaskResult>(result)
}