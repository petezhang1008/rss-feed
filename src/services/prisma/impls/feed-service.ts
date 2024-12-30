import { inject, injectable } from "inversify"
import { FeedService, FeedWithUserRss } from "../feed-service"
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
import { UserRssService } from "../user-rss-service"
import { CategoryService } from "../category-service"
import _ from "lodash"
import { Rss, UserRss } from "@/types/model"
import { TaskService } from "../task-service"

@injectable()
export class FeedServiceImpl implements FeedService {
    constructor(
        @inject(FeedModel)
        private feedModel: FeedModel,
        @inject(UserRssService)
        private userRssService: UserRssService,
        @inject(CategoryService)
        private categoryService: CategoryService,
        @inject(TaskService)
        private taskService: TaskService
    ) { }
    private _getUserRssMap(userRssList: UserRss[]) {
        const userRssMap = new Map<string, UserRss>()
        for (const userRss of userRssList) {
            userRssMap.set(userRss.rssId, userRss)
        }
        return userRssMap
    }
    async queryUserFeed(data: QueryUserFeedParams) {
        const { page, pageSize, userId } = data
        let userRssList = await this.userRssService.queryAllRssList({ userId })
        userRssList = _.uniqBy(userRssList, 'rssId')
        const userRssMap = this._getUserRssMap(userRssList)
        const rssIds = userRssList.map(item => item.rssId)
        const res = await this.feedModel.getFeedByRssIds({
            rssIds,
            page,
            pageSize
        })
        if (!res.result) {
            return {
                ...res,
                result: []
            }
        }
        const feedList: FeedWithUserRss[] = res.result?.map(item => {
            return {
                ...item,
                userRss: userRssMap.get(item.rssId)
            }
        })
        return {
            ...res,
            result: feedList
        }
    }
    getFeed(data: GetFeedParams) {
        return this.feedModel.getFeed(data)
    }
    async getBundleFeed(data: GetBundleFeedParams) {
        const { bundleId, page, pageSize } = data
        const rssList = await this.userRssService.queryAllRssList({
            bundleId
        })
        const userRssMap = this._getUserRssMap(rssList)
        const rssIds = rssList.map(item => item.rssId)
        const res = await this.feedModel.getFeedByRssIds({
            rssIds,
            page,
            pageSize
        })
        if (!res.result) {
            return {
                ...res,
                result: []
            }
        }
        const feedList: FeedWithUserRss[] = res.result.map(item => {
            return {
                ...item,
                userRss: userRssMap.get(item.rssId)
            }
        })
        return {
            ...res,
            result: feedList
        }
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
