import { CreateFeedParams, FeedParams, GetBundleFeedParams, GetFeedParams, QueryUserFeedParams } from "@/models/feed-model"
import { Pagination } from "@/types/pagination"
import { Feed, Prisma } from "@prisma/client"

export const FeedService = Symbol.for('FeedService')

export interface FeedService {
    queryUserFeed: (data: QueryUserFeedParams) => Promise<Pagination<Feed[]>>
    getFeed: (data: GetFeedParams) => Promise<Pagination<Feed[]>>
    getBundleFeed: (data: GetBundleFeedParams) => Promise<Pagination<Feed[]>>
    createFeed: (feed: CreateFeedParams) => Promise<Feed>
    createBatchFeed: (feeds: CreateFeedParams[]) => Promise<Prisma.BatchPayload>
    getFeedByLinks: (links: string[], rssId: string) => Promise<Feed[]>
    updateFeed: (feed: FeedParams) => Promise<Feed>
    deleteFeed: (feedId: string) => Promise<Feed>
    deleteFeedByRssId: (rssId: string) => Promise<Prisma.BatchPayload>
}
