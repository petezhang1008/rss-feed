import { StartTaskParams, FinishTaskParams, TaskSuccessCount } from "@/models/task-model"
import { Task } from "@/types/model"

export const TaskService = Symbol.for('TaskService')

export interface TaskService {
    startTask: (params: StartTaskParams) => Promise<Task>
    finishTask: (id: string, params: FinishTaskParams) => Promise<Task>
    readTask: (id: string) => Promise<Task>
    getLatestTaskByRssId: (rssId: string) => Promise<Task | null>
    getTaskStatus: (id: string) => Promise<Task | null>
    getTasksSuccessCountByRssIds: (rssIds: string[]) => Promise<TaskSuccessCount[]>
}

export type TaskResult = Pick<Task, 'id'>