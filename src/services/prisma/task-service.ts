import { StartTaskParams, FinishTaskParams } from "@/models/task-model"
import { Task } from "@/types/model"

export const TaskService = Symbol.for('TaskService')

export interface TaskService {
    startTask: (params: StartTaskParams) => Promise<Task>
    finishTask: (id: string, params: FinishTaskParams) => Promise<Task>
    readTask: (id: string) => Promise<Task>
    getLatestTaskByRssId: (rssId: string) => Promise<Task | null>
    getTaskStatus: (id: string) => Promise<Task | null>
}

export type TaskResult = Pick<Task, 'id'>