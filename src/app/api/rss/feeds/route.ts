import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendResponse } from "@/lib/http-server"
import { ErrorData, ResponseType } from "@/lib/http-server"
import { PaginationFeeds, GetFeedParams } from "@/models/feed-model"
import { FeedService } from "@/services/prisma/feed-service"
import { NextRequest } from "next/server"

const feedService = injectService<FeedService>(FeedService)
export async function GET(req: NextRequest): ResponseType<PaginationFeeds> {
    const rssId: string | null = req.nextUrl.searchParams.get('rssId')
    const page: number = parseInt(req.nextUrl.searchParams.get('page') || '1')
    const pageSize: number = parseInt(req.nextUrl.searchParams.get('pageSize') || '50')

    if (!rssId) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    const data: GetFeedParams = {
        rssId,
        page,
        pageSize
    }

    const paginationFeeds = await feedService.getFeed(data)
    if (!paginationFeeds) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    return sendResponse<PaginationFeeds>(paginationFeeds)
}
