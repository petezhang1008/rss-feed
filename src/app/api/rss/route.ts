import { injectService } from "@/inversify.config";
import { RssService } from "@/services/rss-service";
import { NextRequest } from "next/server";
import { ErrorData, ResponseType } from '@/lib/http-server.interface';
import { ErrorCode } from '@/enums/error-code';
import { CreateUserRssParams, UpdateUserRssParams } from '@/models/user-rss-model';
import { sendError, sendResponse } from "@/lib/http-server";
import { auth } from "@/auth";
import { RssTaskService } from "@/services/rss-task-service";
import { UserRss } from "@/types/model";
import { UserRssService } from "@/services/user-rss-service";

const userRssService = injectService<UserRssService>(UserRssService);
const rssTaskService = injectService<RssTaskService>(RssTaskService)

export async function GET(req: NextRequest): ResponseType<UserRss[]> {
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const result = await userRssService?.queryUserRssList(userId)
    if (!result) {
        return sendError<ErrorData>(404, ErrorCode.NOT_FOUND)
    }
    return sendResponse<UserRss[]>(result)
}



export async function POST(req: NextRequest): ResponseType<UserRss> {
    const data: CreateUserRssParams = await req.json()
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const result = await userRssService?.createUserRss({
        ...data,
        userId
    })
    rssTaskService.consumeRssTask(result)
    return sendResponse<UserRss>(result)
}
