import { injectService } from "@/inversify.config";
import { NextRequest } from "next/server";
import { ErrorData, ResponseType, sendError } from '@/lib/http-server';
import { sendResponse } from "@/lib/http-server";
import { RssTaskService } from "@/services/task/rss-task-service";
import { Rss } from "@/types/model";
import { RssService } from "@/services/prisma/rss-service";
import { CreateRssParams } from "@/models/rss-model";
import { TaskResult } from "@/services/prisma/task-service";
import { ErrorCode } from "@/enums/error-code";

const rssTaskService = injectService<RssTaskService>(RssTaskService)
const rssService = injectService<RssService>(RssService)


export async function POST(req: NextRequest): ResponseType<CreateRssResponse> {
    const data: CreateRssParams = await req.json()
    const result = await rssService?.createRss({
        ...data,
    })
    if (!result) {
        return sendError<ErrorData>(400, ErrorCode.NO_RSS)
    }
    const taskResult = await rssTaskService.consumeRssTask(result)
    return sendResponse<CreateRssResponse>({
        rss: result,
        task: taskResult || undefined
    })
}


export interface CreateRssResponse {
    rss: Rss
    task?: TaskResult
}