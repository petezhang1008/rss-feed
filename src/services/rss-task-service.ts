import { GenerateRssParams } from "@/models/rss-generator-model"
import { TaskResult } from "./execute-task-service"

export const RssTaskService = Symbol('RssTaskService')

export interface RssTaskService {
    consumeRssTask(data: GenerateRssParams): Promise<TaskResult>
}
