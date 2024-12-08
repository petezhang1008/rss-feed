import { PrismaSymbol } from "@/lib/prisma"
import { Feed, Prisma, PrismaClient } from "@prisma/client"
import { inject, injectable } from "inversify"
import { CreateFeedParams, FeedModel, FeedParams, GetFeedParams, QueryUserFeedParams } from "../feed-model"

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
            take
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
        const { page, pageSize, feedId } = data
        const skip = (page - 1) * pageSize;
        const take = pageSize;
        const result = await this._prisma.feed.findMany({
            skip,
            take,
            where: {
                rssId: feedId
            }
        })
        const total = await this._prisma.feed.count({
            where: {
                rssId: feedId
            }
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
    async deleteFeed(feedId: string) {
        return this._prisma.feed.delete({
            where: {
                id: feedId
            }
        })
    }
    async getFeedByLink(link: string) {
        return this._prisma.feed.findFirst({
            where: {
                link
            }
        })
    }
}
