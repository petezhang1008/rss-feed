import { NextRequest } from "next/server";
import { injectService } from "@/inversify.config";
import { sendResponse, ResponseType, sendError } from "@/lib/http-server";
import _ from "lodash";
import { ErrorCode } from "@/enums/error-code";
import { RssTaskService } from "@/services/task/rss-task-service";

type TaskSuccess = {
    message: string
}
const rssTaskService = injectService<RssTaskService>(RssTaskService)
export async function POST(req: NextRequest): ResponseType<TaskSuccess> {
    const data = await req.json()
    const result = await rssTaskService.consumeRssTask(data)
    if (!result) {
        return sendError(400, ErrorCode.INVALID_PARAMS)
    }
    return sendResponse<TaskSuccess>({
        message: 'success'
    });
}