import { CreateFeedParams, FeedParams, GetBatchFeedParams, GetBundleFeedParams, GetCategoryFeedParams, GetFeedParams, GetLatestFeedCountData, PaginationFeeds, QueryUserFeedParams } from "@/models/feed-model"
import { Feed } from "@/types/model"
import { Prisma } from "@prisma/client"

export const FeedService = Symbol.for('FeedService')

export interface FeedService {
    queryUserFeed: (data: QueryUserFeedParams) => Promise<PaginationFeeds>
    getFeed: (data: GetFeedParams) => Promise<PaginationFeeds>
    getBundleFeed: (data: GetBundleFeedParams) => Promise<PaginationFeeds>
    getFeedByRssIds: (data: GetBatchFeedParams) => Promise<PaginationFeeds>
    getFeedByCategoryId: (data: GetCategoryFeedParams) => Promise<PaginationFeeds>
    createFeed: (feed: CreateFeedParams) => Promise<Feed>
    createBatchFeed: (feeds: CreateFeedParams[]) => Promise<Prisma.BatchPayload>
    getFeedByLinks: (links: string[], rssId: string) => Promise<Feed[]>
    updateFeed: (feed: FeedParams) => Promise<Feed>
    deleteFeed: (feedId: string) => Promise<Feed>
    deleteFeedByRssId: (rssId: string) => Promise<Prisma.BatchPayload>
    getLatestFeedCount: (date: Date) => Promise<GetLatestFeedCountData>
}
