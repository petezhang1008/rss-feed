import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendResponse } from "@/lib/http-server"
import { TaskService } from "@/services/prisma/task-service"
import { NextRequest } from "next/server"
import { ErrorData, ResponseType } from '@/lib/http-server';
import { Task } from "@/types/model"


const _executeTaskService = injectService<TaskService>(TaskService)
export async function GET(req: NextRequest): ResponseType<Task> {
    const rssId: string | null = req.nextUrl.searchParams.get('rssId')
    if (!rssId) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    const taskData = await _executeTaskService.getLatestTaskByRssId(rssId)
    if (!taskData) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    return sendResponse<Task>(taskData)
}
