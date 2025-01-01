import { NextRequest } from "next/server";
import { injectService } from "@/inversify.config";
import { sendResponse, ResponseType } from "@/lib/http-server";
import _ from "lodash";
import { FeedLinkTaskService } from "@/services/task/feed-link-task-service";

type TaskSuccess = {
    message: string
}
const feedLinkTaskService = injectService<FeedLinkTaskService>(FeedLinkTaskService)
export async function POST(req: NextRequest): ResponseType<TaskSuccess> {
    const data = await req.json()
    await feedLinkTaskService.consumeFeedTask(data)
    return sendResponse<TaskSuccess>({
        message: 'success'
    });
}