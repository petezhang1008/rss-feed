import { injectable, inject } from "inversify";
import { RssMQProducer } from "../rss-mq-producer";
import { RabbitMQService } from "../rabbit-mq-service";
import { Rss } from "@/types/model";
import { RabbitMQQueue } from "@/enums/rabbit-mq";
import _ from "lodash";

@injectable()
export class RssMQProducerImpl implements RssMQProducer {
    constructor(
        @inject(RabbitMQService)
        private readonly rabbitMQService: RabbitMQService,
    ) { }

    async sendMessage(rssList: Rss[]): Promise<void> {
        const messages = rssList.map(rss => JSON.stringify({
            ..._.pick(rss, ['id', 'type', 'website', 'selector'])
        }))
        return await this.rabbitMQService.sendBatchMessage(RabbitMQQueue.RSS, messages)
    }
}