import { FeedTask } from "../task/feed-link-task-service"

export const FeedLinkMQProducer = Symbol.for('FeedLinkMQProducer')

export interface FeedLinkMQProducer {
    sendMessage(feedTaskList: FeedTask[]): Promise<void>
}