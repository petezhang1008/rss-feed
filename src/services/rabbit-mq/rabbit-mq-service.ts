export const RabbitMQService = Symbol.for('RabbitMQService')

export interface RabbitMQService {
    sendBatchMessage(queue: string, messages: string[]): Promise<void>
}