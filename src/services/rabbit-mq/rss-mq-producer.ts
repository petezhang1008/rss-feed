import { Rss } from "@/types/model"

export const RssMQProducer = Symbol.for('RssMQProducer')

export interface RssMQProducer {
    sendMessage(rssList: Rss[]): Promise<void>
}