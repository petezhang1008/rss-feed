import { ExecuteTask, PrismaClient } from "@prisma/client"
import { ExecuteTaskModel } from "../execute-task-model"
import { PrismaSymbol } from "@/lib/prisma"
import { inject } from "inversify"


export class ExecuteTaskModelImpl implements ExecuteTaskModel {
    constructor(
        @inject(PrismaSymbol) private _prisma: PrismaClient
    ) { }
    async queryUserExecuteTasks(userId: string) {
        return this._prisma.executeTask.findMany({
            where: {
                userId
            }
        })
    }
    async getExecuteTask(executeTaskId: string) {
        return this._prisma.executeTask.findUnique({
            where: {
                id: executeTaskId
            }
        })
    }
    async createExecuteTask(executeTask: ExecuteTask) {
        return this._prisma.executeTask.create({
            data: executeTask
        })
    }
    async updateExecuteTask(executeTask: ExecuteTask) {
        return this._prisma.executeTask.update({
            where: {
                id: executeTask.id
            },
            data: executeTask
        })
    }
    async deleteExecuteTask(executeTaskId: string) {
        return this._prisma.executeTask.delete({
            where: {
                id: executeTaskId
            }
        })
    }
}