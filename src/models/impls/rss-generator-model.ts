import { inject, injectable } from "inversify";
import { GenerateRssParams, QueryGenerateRssListParams, RssGeneratorModel } from "../rss-generator-model";
import { Prisma, PrismaClient, RssGenerator } from "@prisma/client";
import { PrismaSymbol } from "@/lib/prisma";


@injectable()
export class RssGeneratorModelImpl implements RssGeneratorModel {
    constructor(
        @inject(PrismaSymbol)
        private _prisma: PrismaClient
    ) { }
    async getGenerateRss(id: string) {
        const result = await this._prisma.rssGenerator.findUnique({
            where: { id }
        })
        return result
    }
    async createGenerateRss(data: GenerateRssParams) {
        const result = await this._prisma.rssGenerator.create({
            data
        })
        return result
    }
    async putGenerateRss(data: RssGenerator) {
        const result = await this._prisma.rssGenerator.update({
            where: { id: data.id },
            data
        })
        return result
    }
    async deleteGenerateRss(id: string) {
        const result = await this._prisma.rssGenerator.delete({
            where: { id }
        })
        return result.id
    }
    async queryGenerateRssList(data: QueryGenerateRssListParams) {
        const { page, pageSize, type, frequency, createdAt, updatedAt, userId } = data
        const skip = (page - 1) * pageSize;
        const take = pageSize;
        const where: Prisma.RssGeneratorWhereInput = {
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
            ...(userId && { userId })
        }

        const result = await this._prisma.rssGenerator.findMany({
            skip,
            take,
            where
        })
        const total = await this._prisma.rssGenerator.count({
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
