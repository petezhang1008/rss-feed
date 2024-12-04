import { ExecuteTask } from "@prisma/client"

export const ExecuteTaskModel = Symbol.for('ExecuteTaskModel')

export interface ExecuteTaskModel {
    queryUserExecuteTasks: (userId: string) => Promise<ExecuteTask[]>
    getExecuteTask: (executeTaskId: string) => Promise<ExecuteTask | null>
    createExecuteTask: (executeTask: ExecuteTask) => Promise<ExecuteTask>
    updateExecuteTask: (executeTask: ExecuteTask) => Promise<ExecuteTask>
    deleteExecuteTask: (executeTaskId: string) => Promise<ExecuteTask>
}