import { inject, injectable } from "inversify";
import { CreateRssParams, GetRssByTypeWebsiteSelectorParams, PaginationRssListParams, RssModel, UpdateRssParams } from "../rss-model";
import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaSymbol } from "@/lib/prisma";
import _ from "lodash";


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
    async createRss(data: CreateRssParams) {
        const result = await this._prisma.rss.create({
            data: {
                ...data
            }
        })
        return result
    }
    async getRssByTypeWebsiteSelector(data: GetRssByTypeWebsiteSelectorParams) {
        const whereCondition: any = {
            type: data.type,
            website: data.website,
        };
        if (data.selector) {
            whereCondition.selector = data.selector;
        }
        let result = await this._prisma.rss.findUnique({
            where: {
                type_website_selector: whereCondition
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
    async deleteRss(id: string, userId: string) {
        const result = await this._prisma.rss.delete({
            where: { id }
        })
        return result
    }
    async queryRssList(data: PaginationRssListParams) {
        const { page, pageSize, type, frequency, createdAt, updatedAt } = data
        const skip = (page - 1) * pageSize;
        const take = pageSize;
        const where: Prisma.RssWhereInput = {
            type,
            frequency,
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
}
