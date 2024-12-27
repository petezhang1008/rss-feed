import { inject, injectable } from "inversify";
import { CreateRssParams, GetRssByTypeWebsiteSelectorParams, PaginationRssListParams, QueryRssListParams, RssModel, UpdateRssParams } from "../rss-model";
import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaSymbol } from "@/lib/prisma";


@injectable()
export class RssModelImpl implements RssModel {
    constructor(
        @inject(PrismaSymbol)
        private _prisma: PrismaClient
    ) { }
    async getRss(id: string) {
        const result = await this._prisma.rss.findUnique({
            where: { id },
        })
        return result
    }
    async getRssDetail(id: string) {
        const result = await this._prisma.rss.findUnique({
            where: { id },
            include: {
                feed: {
                    orderBy: {
                        createdAt: 'desc'
                    },
                    take: 50
                },
                userRss: true,
                category: true,
                tasks: {
                    orderBy: {
                        createAt: 'desc'
                    },
                    take: 1
                }
            }
        })
        return result
    }
    async createRss(data: CreateRssParams) {
        const exist = await this._prisma.rss.findFirst({
            where: {
                type: data.type,
                website: data.website,
                selector: data.selector || ""
            }
        })
        if (exist) {
            return exist
        }
        const result = await this._prisma.rss.create({
            data: {
                ...data
            }
        })
        return result
    }
    async getRssByTypeWebsiteSelector(data: GetRssByTypeWebsiteSelectorParams) {
        const result = await this._prisma.rss.findUnique({
            where: {
                type_website_selector: {
                    type: data.type,
                    website: data.website,
                    selector: data.selector || ""
                }
            },
        })
        return result
    }
    async updateRss(id: string, data: UpdateRssParams) {
        const result = await this._prisma.rss.update({
            where: { id },
            data
        })
        return result
    }
    async deleteRss(id: string) {
        const result = await this._prisma.rss.delete({
            where: { id }
        })
        return result
    }
    async queryRssList(data: PaginationRssListParams) {
        const { page, pageSize, type, frequency, createdAt, updatedAt, official } = data
        const skip = (page - 1) * pageSize;
        const take = pageSize;
        const where: Prisma.RssWhereInput = {
            type,
            frequency,
            official,
            ...(createdAt && {
                createdAt: {
                    gte: createdAt,
                }
            }),
            ...(updatedAt && {
                updatedAt: {
                    gte: updatedAt
                }
            }),
        }

        const result = await this._prisma.rss.findMany({
            skip,
            take,
            where,
            orderBy: {
                createdAt: 'desc'
            }
        })
        const total = await this._prisma.rss.count({
            where
        })
        return {
            result,
            total,
            page,
            pageSize
        }
    }
    async queryAllRssList(data: QueryRssListParams) {
        const { type, frequency, createdAt, updatedAt, official } = data
        const where: Prisma.RssWhereInput = {
            type,
            frequency,
            official,
            ...(createdAt && {
                createdAt: {
                    gte: createdAt,
                }
            }),
            ...(updatedAt && {
                updatedAt: {
                    gte: updatedAt
                }
            }),
        }
        const result = await this._prisma.rss.findMany({
            where,
            orderBy: {
                createdAt: 'desc'
            }
        })
        return result
    }
    async getFavoriteRssList(count: number) {
        const rssWithUserRssCount = await this._prisma.rss.findMany({
            include: {
                _count: {
                    select: {
                        userRss: true
                    }
                },
            },
        })
        const result = rssWithUserRssCount.sort((a, b) => b._count.userRss - a._count.userRss).slice(0, count)
        return result
    }
}