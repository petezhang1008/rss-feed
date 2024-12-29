import { TaskResult } from "../prisma/task-service"
import { Rss } from "@/types/model"

export const RssTaskService = Symbol('RssTaskService')

export interface RssTaskService {
    consumeRssTask(data: Rss): Promise<TaskResult | null>
}
