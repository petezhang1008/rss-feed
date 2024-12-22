import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendResponse } from "@/lib/http-server"
import { ErrorData, ResponseType } from "@/lib/http-server.interface"
import { PaginationFeeds, GetBundleFeedParams } from "@/models/feed-model"
import { FeedService } from "@/services/feed-service"
import { NextRequest } from "next/server"

const feedService = injectService<FeedService>(FeedService)
export async function GET(req: NextRequest): ResponseType<PaginationFeeds> {
    const bundleId: string | null = req.nextUrl.searchParams.get('bundleId')
    const page: number = parseInt(req.nextUrl.searchParams.get('page') || '1')
    const pageSize: number = parseInt(req.nextUrl.searchParams.get('pageSize') || '50')

    if (!bundleId) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    const data: GetBundleFeedParams = {
        bundleId,
        page,
        pageSize
    }

    const paginationFeeds = await feedService.getBundleFeed(data)
    if (!paginationFeeds) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    return sendResponse<PaginationFeeds>(paginationFeeds)
}
