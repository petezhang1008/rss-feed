import { Feed } from "@/types/model"

export const FeedLinkTaskService = Symbol.for('FeedLinkTaskService')

export interface FeedLinkTaskService {
    consumeFeedTask(data: FeedTask): Promise<void>
}

export interface FeedTask {
    targetPages: string[],
    rssId: string,
    taskId: string,
}

export type FeedDataFromParser = Pick<Feed, 'title' | 'link' | 'domain' | 'rssId'> & Partial<Feed>
