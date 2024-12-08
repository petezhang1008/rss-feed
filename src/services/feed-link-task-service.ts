import { Feed } from "@prisma/client"

export const FeedLinkTaskService = Symbol('FeedLinkTaskService')

export interface FeedLinkTaskService {
    consumeFeedTask(data: FeedTask): Promise<void>
}

export interface FeedTask {
    url: string,
    rssId: string
}

export type FeedDataFromParser = Pick<Feed, 'title' | 'link' | 'domain' | 'rssId'> & Partial<Feed>
