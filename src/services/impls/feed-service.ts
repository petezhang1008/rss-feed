import { Feed } from "@prisma/client"
import { inject, injectable } from "inversify"
import { FeedService } from "../feed-service"
import { CreateFeedParams, FeedModel, FeedParams, QueryUserFeedParams } from "@/models/feed-model"

@injectable()
export class FeedServiceImpl implements FeedService {
    constructor(
        @inject(FeedModel)
        private feedModel: FeedModel
    ) { }
    queryUserFeed(data: QueryUserFeedParams) {
        return this.feedModel.queryUserFeed(data)
    }
    getFeed(feedId: string) {
        return this.feedModel.getFeed(feedId)
    }
    async createFeed(feed: CreateFeedParams) {
        const isExist = await this.feedModel.getFeedByLink(feed.link)
        if (isExist) {
            throw new Error('Feed already exists')
        }
        return this.feedModel.createFeed(feed)
    }
    updateFeed(feed: FeedParams) {
        return this.feedModel.updateFeed(feed)
    }
    deleteFeed(feedId: string) {
        return this.feedModel.deleteFeed(feedId)
    }
}