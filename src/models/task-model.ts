import { Task } from "@/types/model"

export const TaskModel = Symbol.for('TaskModel')

export interface TaskModel {
    getLatestTaskByRssId: (rssId: string) => Promise<Task | null>
    startTask: (params: StartTaskParams) => Promise<Task>
    finishTask: (id: string, params: FinishTaskParams) => Promise<Task>
    readTask: (id: string) => Promise<Task>
    getTaskStatus: (id: string) => Promise<Task | null>
}

export type StartTaskParams = Pick<Task, 'count' | 'rssId'>
export type FinishTaskParams = Pick<Task, 'successCount'>