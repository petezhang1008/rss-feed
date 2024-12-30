import { CreateFeedParams, FeedParams, GetBatchFeedParams, GetBundleFeedParams, GetCategoryFeedParams, GetFeedParams, GetLatestFeedCountData, PaginationFeeds, QueryUserFeedParams } from "@/models/feed-model"
import { Feed, FeedWithRss, UserRss } from "@/types/model"
import { Pagination } from "@/types/pagination"
import { Prisma } from "@prisma/client"

export const FeedService = Symbol.for('FeedService')

export interface FeedService {
    queryUserFeed: (data: QueryUserFeedParams) => Promise<PaginationFeedsWithUserRss>
    getFeed: (data: GetFeedParams) => Promise<PaginationFeeds>
    getBundleFeed: (data: GetBundleFeedParams) => Promise<PaginationFeedsWithUserRss>
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

export interface FeedWithUserRss extends FeedWithRss {
    userRss?: UserRss
}

export type PaginationFeedsWithUserRss = Pagination<FeedWithUserRss[]> 