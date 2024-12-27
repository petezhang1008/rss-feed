import { inject, injectable } from "inversify"
import { FeedService } from "../prisma/feed-service"
import {
    CreateFeedParams,
    FeedModel,
    FeedParams,
    GetBatchFeedParams,
    GetBundleFeedParams,
    GetCategoryFeedParams,
    GetFeedParams,
    QueryUserFeedParams
} from "@/models/feed-model"
import { RssService } from "../prisma/rss-service"
import { UserRssService } from "../prisma/user-rss-service"
import { CategoryService } from "../prisma/category-service"
import _ from "lodash"
import { Rss } from "@/types/model"

@injectable()
export class FeedServiceImpl implements FeedService {
    constructor(
        @inject(FeedModel)
        private feedModel: FeedModel,
        @inject(RssService)
        private rssService: RssService,
        @inject(UserRssService)
        private userRssService: UserRssService,
        @inject(CategoryService)
        private categoryService: CategoryService
    ) { }
    async queryUserFeed(data: QueryUserFeedParams) {
        const { page, pageSize, userId } = data
        const userRssList = await this.userRssService.queryAllRssList({ userId })
        const rssIds = userRssList.map(item => item.rssId)
        return this.feedModel.getFeedByRssIds({
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
        const rssList = await this.userRssService.queryAllRssList({
            bundleId
        })
        const rssIds = rssList.map(item => item.rssId)
        return this.feedModel.getFeedByRssIds({
            rssIds,
            page,
            pageSize
        })
    }
    getFeedByRssIds(data: GetBatchFeedParams) {
        return this.feedModel.getFeedByRssIds(data)
    }
    async getFeedByCategoryId(data: GetCategoryFeedParams) {
        const { categoryId, page, pageSize } = data
        let rssList: Rss[] = []
        if (!categoryId) {
            const result = await this.categoryService.getCategories()
            rssList = _.flatMap(result, item => {
                return item?.rssList
            })
        } else {
            const category = await this.categoryService.getCategoryById(categoryId)
            rssList = category?.rssList || []
        }
        const rssIds = rssList?.map(item => item.id)
        return this.feedModel.getFeedByRssIds({
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
    async createBatchFeed(feeds: CreateFeedParams[]) {
        return this.feedModel.createBatchFeed(feeds)
    }
    getFeedByLinks(links: string[], rssId: string) {
        return this.feedModel.getFeedByLinks(links, rssId)
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
    getLatestFeedCount(date: Date) {
        return this.feedModel.getLatestFeedCount(date)
    }
}
