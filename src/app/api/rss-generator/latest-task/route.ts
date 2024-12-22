import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendResponse } from "@/lib/http-server"
import { ExecuteTaskService } from "@/services/execute-task-service"
import { NextRequest } from "next/server"
import { ErrorData, ResponseType } from '@/lib/http-server.interface';
import { ExecuteTask } from "@prisma/client"


const _executeTaskService = injectService<ExecuteTaskService>(ExecuteTaskService)
export async function GET(req: NextRequest): ResponseType<ExecuteTask> {
    const rssId: string | null = req.nextUrl.searchParams.get('rssId')
    if (!rssId) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    const taskData = await _executeTaskService.getLatestExecuteTaskByRssId(rssId)
    if (!taskData) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    return sendResponse<ExecuteTask>(taskData)
}
