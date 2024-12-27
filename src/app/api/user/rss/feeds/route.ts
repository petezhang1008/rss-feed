import { auth } from "@/auth"
import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendResponse } from "@/lib/http-server"
import { ErrorData, ResponseType } from "@/lib/http-server"
import { GetFeedParams, PaginationFeeds } from "@/models/feed-model"
import { FeedService } from "@/services/prisma/feed-service"
import { NextRequest } from "next/server"

const feedService = injectService<FeedService>(FeedService)
export async function GET(req: NextRequest): ResponseType<PaginationFeeds> {
    const page: number = parseInt(req.nextUrl.searchParams.get('page') || '1')
    const pageSize: number = parseInt(req.nextUrl.searchParams.get('pageSize') || '50')
    const rssId: string = req.nextUrl.searchParams.get('rssId') || ''
    const session = await auth()
    const userId = session?.user.id

    if (!userId) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    const data: GetFeedParams = {
        page,
        pageSize,
        rssId
    }

    const paginationFeeds = await feedService.getFeed(data)
    if (!paginationFeeds) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    return sendResponse<PaginationFeeds>(paginationFeeds)
}
