import { StartTaskParams, FinishTaskParams } from "@/models/execute-task-model"
import { ExecuteTask } from "@prisma/client"

export const ExecuteTaskService = Symbol.for('ExecuteTaskService')

export interface ExecuteTaskService {
    startTask: (params: StartTaskParams) => Promise<ExecuteTask>
    finishTask: (id: string, params: FinishTaskParams) => Promise<ExecuteTask>
    readTask: (id: string) => Promise<ExecuteTask>
    getLatestExecuteTaskByRssId: (rssId: string) => Promise<ExecuteTask | null>
}

export type TaskResult = Pick<ExecuteTask, 'id'>