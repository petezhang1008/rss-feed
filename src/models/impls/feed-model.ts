import { PrismaSymbol } from "@/lib/prisma"
import { Feed, PrismaClient } from "@prisma/client"
import { inject } from "inversify"
import { FeedModel } from "../feed-model"


export class FeedModelImpl implements FeedModel {
    constructor(
        @inject(PrismaSymbol) private _prisma: PrismaClient
    ) { }
    async queryUserFeed(userId: string) {
        return this._prisma.feed.findMany({
            where: {
                userId
            }
        })
    }
    async getFeed(feedId: string) {
        return this._prisma.feed.findUnique({
            where: {
                id: feedId
            }
        })
    }
    async createFeed(feed: Feed) {
        return this._prisma.feed.create({
            data: feed
        })
    }
    async updateFeed(feed: Feed) {
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
}