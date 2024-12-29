import { TaskModel, FinishTaskParams, StartTaskParams } from "../task-model"
import { PrismaSymbol } from "@/lib/prisma"
import { inject, injectable } from "inversify"
import { RssTaskStatus } from "@/enums/rss"
import { PrismaClient } from "@prisma/client"

@injectable()
export class TaskModelImpl implements TaskModel {
    constructor(
        @inject(PrismaSymbol) private _prisma: PrismaClient
    ) { }
    async getLatestTaskByRssId(rssId: string) {
        return this._prisma.task.findFirst({
            where: {
                rssId,
                status: RssTaskStatus.FINISHED,
                successCount: {
                    gt: 0
                }
            },
            orderBy: {
                createAt: 'desc'
            }
        })
    }
    async startTask(params: StartTaskParams) {
        return this._prisma.task.create({
            data: params
        })
    }
    async finishTask(id: string, params: FinishTaskParams) {
        return this._prisma.task.update({
            where: {
                id
            },
            data: {
                status: RssTaskStatus.FINISHED,
                ...params
            }
        })
    }
    async readTask(id: string) {
        return this._prisma.task.update({
            where: {
                id
            },
            data: {
                isRead: true
            }
        })
    }
    async getTaskStatus(id: string) {
        return this._prisma.task.findUnique({
            where: {
                id
            }
        })
    }
}
