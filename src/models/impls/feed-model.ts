import { PrismaSymbol } from "@/lib/prisma"
import { Feed, Prisma, PrismaClient } from "@prisma/client"
import { inject, injectable } from "inversify"
import { CreateFeedParams, FeedModel, FeedParams, GetBatchFeedParams, GetFeedParams, QueryUserFeedParams } from "../feed-model"

@injectable()
export class FeedModelImpl implements FeedModel {
    constructor(
        @inject(PrismaSymbol) private _prisma: PrismaClient
    ) { }
    async queryUserFeed(data: QueryUserFeedParams) {
        const { page, pageSize, userId } = data
        const skip = (page - 1) * pageSize;
        const take = pageSize;
        const where: Prisma.FeedWhereInput = {
            userId
        }
        const result = await this._prisma.feed.findMany({
            where,
            skip,
            take,
            include: {
                bundle: true
            }
        })
        const total = await this._prisma.feed.count({
            where
        })
        return {
            result,
            total,
            page,
            pageSize
        }
    }
    async getFeed(data: GetFeedParams) {
        const { page, pageSize, rssId } = data
        const skip = (page - 1) * pageSize;
        const take = pageSize;
        const result = await this._prisma.feed.findMany({
            skip,
            take,
            where: {
                rssId: rssId
            }
        })
        const total = await this._prisma.feed.count({
            where: {
                rssId: rssId
            }
        })
        return {
            result,
            total,
            page,
            pageSize
        }
    }
    async getFeedByIds(data: GetBatchFeedParams) {
        const { page, pageSize, rssIds } = data
        const skip = (page - 1) * pageSize;
        const take = pageSize;
        const where: Prisma.FeedWhereInput = {
            rssId: {
                in: rssIds
            }
        }
        const result = await this._prisma.feed.findMany({
            skip,
            take,
            where,
        })
        const total = await this._prisma.feed.count({
            where
        })
        return {
            result,
            total,
            page,
            pageSize
        }
    }

    async createFeed(feed: CreateFeedParams) {
        return this._prisma.feed.create({
            data: feed
        })
    }
    async updateFeed(feed: FeedParams) {
        return this._prisma.feed.update({
            where: {
                id: feed.id
            },
            data: feed
        })
    }
    async deleteFeed(rssId: string) {
        return this._prisma.feed.delete({
            where: {
                id: rssId
            }
        })
    }
    async getFeedByLink(link: string, rssId: string) {
        return this._prisma.feed.findFirst({
            where: {
                link,
                rssId
            }
        })
    }
}
