import { CreateFeedParams, FeedParams, QueryUserFeedParams } from "@/models/feed-model"
import { Pagination, PaginationParams } from "@/types/pagination"
import { Feed } from "@prisma/client"

export const FeedService = Symbol.for('FeedService')

export interface FeedService {
    queryUserFeed: (data: QueryUserFeedParams) => Promise<Pagination<Feed[]>>
    getFeed: (feedId: string) => Promise<Feed | null>
    createFeed: (feed: CreateFeedParams) => Promise<Feed>
    updateFeed: (feed: FeedParams) => Promise<Feed>
    deleteFeed: (feedId: string) => Promise<Feed>
}
