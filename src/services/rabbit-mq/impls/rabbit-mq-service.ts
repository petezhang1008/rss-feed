import { RABBIT_MQ_URL } from "@/constants/env-config";
import { RabbitMQService } from "../rabbit-mq-service";
import { injectable } from "inversify";
import amqplib from 'amqplib'

@injectable()
export class RabbitMQServiceImpl implements RabbitMQService {
    async sendBatchMessage(queue: string, messages: string[]) {
        try {
            // 连接到 RabbitMQ
            const connection = await amqplib.connect(RABBIT_MQ_URL);
            const channel = await connection.createChannel();
            // 声明队列
            await channel.assertQueue(queue, { durable: true });

            // 发送消息
            for (const message of messages) {
                await channel.sendToQueue(queue, Buffer.from(message));
            }
            console.log(`Message sent to queue: ${queue} | count: ${messages.length}`);

            // 关闭通道和连接
            await channel.close();
            await connection.close();
        } catch (error) {
            console.error('Error sending batch message:', error);
            throw error;
        }
    }
}