export const FeedTaskService = Symbol('FeedTaskService')

export interface FeedTaskService {
    consumeFeedTask(data: FeedTask): Promise<void>
}

export interface FeedTask {
    url: string
}