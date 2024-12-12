import { inject, injectable } from "inversify"
import { FeedService } from "../feed-service"
import { CreateFeedParams, FeedModel, FeedParams, GetBundleFeedParams, GetFeedParams, QueryUserFeedParams } from "@/models/feed-model"
import { RssGeneratorService } from "../rss-generator-service"

@injectable()
export class FeedServiceImpl implements FeedService {
    constructor(
        @inject(FeedModel)
        private feedModel: FeedModel,
        @inject(RssGeneratorService)
        private rssGeneratorService: RssGeneratorService
    ) { }
    async queryUserFeed(data: QueryUserFeedParams) {
        const { page, pageSize, userId } = data
        const rssList = await this.rssGeneratorService.queryAllRssList({ userId })
        const rssIds = rssList.map(item => item.id)
        return this.feedModel.getFeedByIds({
            rssIds,
            page,
            pageSize
        })
    }
    getFeed(data: GetFeedParams) {
        return this.feedModel.getFeed(data)
    }
    async getBundleFeed(data: GetBundleFeedParams) {
        const { bundleId, page, pageSize } = data
        const rssList = await this.rssGeneratorService.queryAllRssList({
            bundleId
        })
        const rssIds = rssList.map(item => item.id)
        return this.feedModel.getFeedByIds({
            rssIds,
            page,
            pageSize
        })
    }
    async createFeed(feed: CreateFeedParams) {
        const isExist = await this.feedModel.getFeedByLink(feed.link, feed.rssId)
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
    deleteFeedByRssId(rssId: string) {
        return this.feedModel.deleteFeedByRssId(rssId)
    }
}