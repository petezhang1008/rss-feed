import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendResponse } from "@/lib/http-server"
import { ErrorData, ResponseType } from "@/lib/http-server.interface"
import { PaginationFeeds, GetCategoryFeedParams } from "@/models/feed-model"
import { FeedService } from "@/services/feed-service"
import { NextRequest } from "next/server"

const feedService = injectService<FeedService>(FeedService)
export async function GET(req: NextRequest): ResponseType<PaginationFeeds> {
    const searchParams = await req.nextUrl.searchParams
    const categoryId: string | null = searchParams.get('categoryId')
    const page: number = parseInt(searchParams.get('page') || '1')
    const pageSize: number = parseInt(searchParams.get('pageSize') || '50')

    const data: GetCategoryFeedParams = {
        categoryId: categoryId || undefined,
        page,
        pageSize
    }

    const paginationFeeds = await feedService.getFeedByCategoryId(data)
    if (!paginationFeeds) {
        return sendError<ErrorData>(400, ErrorCode.NOT_FOUND)
    }
    return sendResponse<PaginationFeeds>(paginationFeeds)
}
