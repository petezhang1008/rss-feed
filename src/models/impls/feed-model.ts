import { PrismaSymbol } from "@/lib/prisma"
import { Prisma, PrismaClient } from "@prisma/client"
import { inject, injectable } from "inversify"
import { CreateFeedParams, FeedModel, FeedParams, GetBatchFeedParams, GetFeedParams } from "../feed-model"
import { FeedWithRss } from "@/types/model"

@injectable()
export class FeedModelImpl implements FeedModel {
    constructor(
        @inject(PrismaSymbol) private _prisma: PrismaClient
    ) { }
    async getFeed(data: GetFeedParams) {
        const { page, pageSize, rssId } = data
        const skip = (page - 1) * pageSize;
        const take = pageSize;
        const result = await this._prisma.feed.findMany({
            skip,
            take,
            where: {
                rssId: rssId
            },
            orderBy: [{
                createdAt: 'desc',
            }, {
                title: 'desc'
            }],
            include: {
                rss: true
            }
        })
        const total = await this._prisma.feed.count({
            where: {
                rssId: rssId
            }
        })
        return {
            result: result as FeedWithRss[],
            total,
            page,
            pageSize
        }
    }
    async getFeedByRssIds(data: GetBatchFeedParams) {
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
            include: {
                rss: true,
            },
            orderBy: [{
                createdAt: 'desc',
            }, {
                title: 'desc'
            }]
        })
        const total = await this._prisma.feed.count({
            where
        })
        return {
            result: result as FeedWithRss[],
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
    async createBatchFeed(feeds: CreateFeedParams[]) {
        return this._prisma.feed.createMany({
            data: feeds
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
    async getFeedByLinks(links: string[], rssId: string) {
        return this._prisma.feed.findMany({
            where: {
                rssId,
                link: {
                    in: links
                }
            }
        })
    }
    async deleteFeedByRssId(rssId: string) {
        return this._prisma.feed.deleteMany({
            where: {
                rssId
            }
        })
    }
}