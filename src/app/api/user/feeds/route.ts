import { auth } from "@/auth"
import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendResponse } from "@/lib/http-server"
import { ErrorData, ResponseType } from "@/lib/http-server"
import { PaginationFeeds, QueryUserFeedParams } from "@/models/feed-model"
import { FeedService } from "@/services/feed-service"
import { NextRequest } from "next/server"

const feedService = injectService<FeedService>(FeedService)
export async function GET(req: NextRequest): ResponseType<PaginationFeeds> {
    const page: number = parseInt(req.nextUrl.searchParams.get('page') || '1')
    const pageSize: number = parseInt(req.nextUrl.searchParams.get('pageSize') || '50')
    const session = await auth()
    const userId = session?.user.id

    if (!userId) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    const data: QueryUserFeedParams = {
        userId,
        page,
        pageSize
    }

    const paginationFeeds = await feedService.queryUserFeed(data)
    if (!paginationFeeds) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    return sendResponse<PaginationFeeds>(paginationFeeds)
}
