import { ExecuteTask } from "@prisma/client"

export const ExecuteTaskModel = Symbol.for('ExecuteTaskModel')

export interface ExecuteTaskModel {
    getLatestExecuteTaskByRssId: (rssId: string) => Promise<ExecuteTask | null>
    startExecuteTask: (params: StartTaskParams) => Promise<ExecuteTask>
    finishExecuteTask: (id: string, params: FinishTaskParams) => Promise<ExecuteTask>
    readExecuteTask: (id: string) => Promise<ExecuteTask>
}

export type StartTaskParams = Pick<ExecuteTask, 'count' | 'rssId'>
export type FinishTaskParams = Pick<ExecuteTask, 'successCount'>