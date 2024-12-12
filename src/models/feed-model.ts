import { Pagination, PaginationParams } from "@/types/pagination"
import { Feed, Prisma } from "@prisma/client"
export const FeedModel = Symbol.for('FeedModel')

export interface FeedModel {
    getFeed: (data: GetFeedParams) => Promise<Pagination<Feed[]>>
    getFeedByIds: (data: GetBatchFeedParams) => Promise<Pagination<Feed[]>>
    createFeed: (feed: CreateFeedParams) => Promise<Feed>
    updateFeed: (feed: FeedParams) => Promise<Feed>
    deleteFeed: (feedId: string) => Promise<Feed>
    getFeedByLink: (link: string, rssId: string) => Promise<Feed | null>
    deleteFeedByRssId: (rssId: string) => Promise<Prisma.BatchPayload>
}

export type FeedParams = Pick<Feed, 'id' | 'title' | 'link' | 'image' | 'author' | 'domain'> & Partial<Feed>
export type CreateFeedParams = Pick<Feed, 'title' | 'link' | 'domain' | 'rssId'> & Partial<Feed>
export interface QueryUserFeedParams extends PaginationParams {
    userId: string
}

export interface GetFeedParams extends PaginationParams {
    rssId: string
}

export interface GetBatchFeedParams extends PaginationParams {
    rssIds: string[]
}


export interface GetBundleFeedParams extends PaginationParams {
    bundleId: string
}