import { GenerateRssParams } from "@/models/rss-generator-model"

export const RssTaskService = Symbol('RssTaskService')

export interface RssTaskService {
    consumeRssTask(data: GenerateRssParams): Promise<void>
}
