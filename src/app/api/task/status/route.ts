import { NextRequest } from "next/server";
import { TaskService } from "@/services/prisma/task-service"
import { injectService } from "@/inversify.config";
import { sendResponse, ResponseType, sendError } from "@/lib/http-server";
import { Task } from "@/types/model";
import { ErrorCode } from "@/enums/error-code";

const taskService = injectService<TaskService>(TaskService)

export async function GET(req: NextRequest): ResponseType<Task> {
    const data = await req.nextUrl.searchParams
    const taskId: string | null = data.get('taskId')
    if (!taskId) {
        return sendError(400, ErrorCode.BAD_REQUEST)
    }
    const task = await taskService.getTaskStatus(taskId)
    if (!task) {
        return sendError(400, ErrorCode.NOT_FOUND)
    }
    return sendResponse<Task>(task)
}
