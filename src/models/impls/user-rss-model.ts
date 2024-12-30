import { CreateUserRssParams, PaginationUserRssParams, QueryUserRssParams, UpdateUserRssParams, UserRssModel } from "../user-rss-model"
import { PrismaSymbol } from "@/lib/prisma"
import { PrismaClient } from "@prisma/client"
import { inject, injectable } from "inversify"

@injectable()
export class UserRssModelImpl implements UserRssModel {
    constructor(
        @inject(PrismaSymbol)
        private _prisma: PrismaClient
    ) { }
    getUserRss(id: string) {
        return this._prisma.userRss.findUnique({
            where: {
                id
            },
            include: {
                rss: true,
                bundle: true
            },
        })
    }
    async queryUserRssList(params: PaginationUserRssParams) {
        const { page, pageSize, userId } = params
        const skip = (page - 1) * pageSize
        const take = pageSize
        const total = await this._prisma.userRss.count({
            where: {
                userId
            }
        })
        const result = await this._prisma.userRss.findMany({
            skip,
            take,
            where: {
                userId
            },
            include: {
                rss: true,
                bundle: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return {
            result,
            total,
            page,
            pageSize
        }
    }
    queryAllRssList(params: QueryUserRssParams) {
        return this._prisma.userRss.findMany({
            where: {
                ...params,
                ...(params.createdAt && { createdAt: { gte: params.createdAt } }),
                ...(params.updatedAt && { updatedAt: { gte: params.updatedAt } })
            },
            include: {
                rss: true,
                bundle: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }
    createUserRss(data: CreateUserRssParams) {
        return this._prisma.userRss.create({
            data,
            include: {
                rss: true,
                bundle: true
            }
        })
    }
    deleteUserRss(id: string, userId: string) {
        return this._prisma.userRss.delete({
            where: {
                id,
                userId
            }
        })
    }
    updateUserRss(id: string, data: UpdateUserRssParams) {
        return this._prisma.userRss.update({
            where: { id },
            data,
            include: {
                rss: true,
                bundle: true
            }
        })
    }
}