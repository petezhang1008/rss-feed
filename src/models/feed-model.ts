import { Pagination, PaginationParams } from "@/types/pagination"
import { Feed, FeedWithRss } from "@/types/model"
import { Prisma } from "@prisma/client"
export const FeedModel = Symbol.for('FeedModel')

export interface FeedModel {
    getFeed: (data: GetFeedParams) => Promise<PaginationFeeds>
    getFeedByRssIds: (data: GetBatchFeedParams) => Promise<PaginationFeeds>
    createFeed: (feed: CreateFeedParams) => Promise<Feed>
    createBatchFeed: (feeds: CreateFeedParams[]) => Promise<Prisma.BatchPayload>
    updateFeed: (feed: FeedParams) => Promise<Feed>
    deleteFeed: (feedId: string) => Promise<Feed>
    getFeedByLink: (link: string, rssId: string) => Promise<Feed | null>
    getFeedByLinks: (links: string[], rssId: string) => Promise<Feed[]>
    deleteFeedByRssId: (rssId: string) => Promise<Prisma.BatchPayload>
    getLatestFeedCount: (date: Date) => Promise<GetLatestFeedCountData>
}

export type FeedParams = Pick<Feed, 'id' | 'title' | 'link' | 'image' | 'author'> & Partial<Feed>
export type CreateFeedParams = Pick<Feed, 'title' | 'link' | 'rssId'> & Partial<Feed>
export interface QueryUserFeedParams extends PaginationParams {
    userId: string
}

export interface GetFeedParams extends PaginationParams {
    rssId: string
}

export interface GetBatchFeedParams extends PaginationParams {
    rssIds: string[]
}

export interface GetCategoryFeedParams extends PaginationParams {
    categoryId?: string
}

export interface GetBundleFeedParams extends PaginationParams {
    bundleId: string
}

export type PaginationFeeds = Pagination<FeedWithRss[]>

export interface GetLatestFeedCountData {
    feedCount: number
    rssCount: number
}