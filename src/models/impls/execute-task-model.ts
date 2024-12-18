import { PrismaClient } from "@prisma/client"
import { ExecuteTaskModel, FinishTaskParams, StartTaskParams } from "../execute-task-model"
import { PrismaSymbol } from "@/lib/prisma"
import { inject, injectable } from "inversify"
import { RssTaskStatus } from "@/enums/rss"

@injectable()
export class ExecuteTaskModelImpl implements ExecuteTaskModel {
    constructor(
        @inject(PrismaSymbol) private _prisma: PrismaClient
    ) { }
    async getLatestExecuteTaskByRssId(rssId: string) {
        return this._prisma.executeTask.findFirst({
            where: {
                rssId,
                status: RssTaskStatus.finished,
                successCount: {
                    gt: 0
                }
            },
            orderBy: {
                createAt: 'desc'
            }
        })
    }
    async startExecuteTask(params: StartTaskParams) {
        return this._prisma.executeTask.create({
            data: params
        })
    }
    async finishExecuteTask(id: string, params: FinishTaskParams) {
        return this._prisma.executeTask.update({
            where: {
                id
            },
            data: {
                status: RssTaskStatus.finished,
                ...params
            }
        })
    }
    async readExecuteTask(id: string) {
        return this._prisma.executeTask.update({
            where: {
                id
            },
            data: {
                isRead: true
            }
        })
    }
}