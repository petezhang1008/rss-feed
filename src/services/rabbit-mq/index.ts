import { ContainerModule } from "inversify"
import { FeedLinkMQProducer } from "./feed-link-mq-producer"
import { FeedLinkMQProducerImpl } from "./impls/feed-link-mq-producer"
import { RabbitMQServiceImpl } from "./impls/rabbit-mq-service"
import { RssMQProducerImpl } from "./impls/rss-mq-producer"
import { RabbitMQService } from "./rabbit-mq-service"
import { RssMQProducer } from "./rss-mq-producer"

export const rabbitMQ = new ContainerModule((bind) => {
    bind(RabbitMQService).to(RabbitMQServiceImpl)
    bind(RssMQProducer).to(RssMQProducerImpl)
    bind(FeedLinkMQProducer).to(FeedLinkMQProducerImpl)
})