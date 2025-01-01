import { injectable, inject } from "inversify";
import { FeedLinkMQProducer } from "../feed-link-mq-producer";
import { RabbitMQService } from "../rabbit-mq-service";
import { FeedTask } from "@/services/task/feed-link-task-service";
import { RabbitMQQueue } from "@/enums/rabbit-mq";

@injectable()
export class FeedLinkMQProducerImpl implements FeedLinkMQProducer {
    constructor(
        @inject(RabbitMQService)
        private readonly rabbitMQService: RabbitMQService,
    ) { }

    async sendMessage(feedTaskList: FeedTask[]): Promise<void> {
        const messages = feedTaskList.map(feedTask => JSON.stringify(feedTask))
        return await this.rabbitMQService.sendBatchMessage(RabbitMQQueue.FEED_LINK, messages)
    }
}