import { CreateUserRssParams, PaginationUserRssParams, QueryUserRssParams, UpdateUserRssParams, UserRssModel } from "@/models/user-rss-model";
import { inject, injectable } from "inversify";
import { CreateUserRssByRssIdParams, UserRssService } from "../user-rss-service";
import { RssService } from "../rss-service";
import { TaskService } from "../task-service";
import _ from "lodash";

@injectable()
export class UserRssServiceImpl implements UserRssService {
    constructor(
        @inject(UserRssModel)
        private _userRssModel: UserRssModel,
        @inject(RssService)
        private _rssService: RssService,
        @inject(TaskService)
        private _taskService: TaskService
    ) { }

    async getRssDetail(id: string) {
        return this._userRssModel.getUserRss(id)
    }

    async createUserRss(data: CreateUserRssParams) {
        let rss = await this._rssService.getRssByTypeWebsiteSelector({
            type: data.type!,
            website: data.website!,
            selector: data.selector || null
        })
        if (!rss) {
            rss = await this._rssService.createRss({
                type: data.type!,
                website: data.website!,
                selector: data.selector,
            })
        }
        return this._userRssModel.createUserRss({
            userId: data.userId,
            rssId: rss.id,
            title: rss.title,
            description: rss.description || null
        })
    }

    async createUserRssByRssId(params: CreateUserRssByRssIdParams) {
        const rss = await this._rssService.getRss(params.rssId)
        return this._userRssModel.createUserRss({
            userId: params.userId,
            rssId: params.rssId,
            title: rss?.title || '',
            description: rss?.description || null
        })
    }

    async updateUserRss(id: string, data: UpdateUserRssParams) {
        return this._userRssModel.updateUserRss(id, data)
    }
    async deleteUserRss(id: string, userId: string) {
        return this._userRssModel.deleteUserRss(id, userId)
    }
    async queryUserRssList(params: PaginationUserRssParams) {
        return this._userRssModel.queryUserRssList(params)
    }
    async queryAllRssList(params: QueryUserRssParams) {
        return this._userRssModel.queryAllRssList(params)
    }
    async getUserRssListWithTaskSuccessCount(userId: string) {
        let _userRssList = await this.queryAllRssList({
            userId,
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 24)
        })
        _userRssList = _.uniqBy(_userRssList, 'rssId')
        const rssIds = _userRssList.map(item => item.rssId)
        const taskSuccessCountList = await this._taskService.getTasksSuccessCountByRssIds(rssIds)
        const taskSuccessCountMap = new Map<string, number>()
        for (const item of taskSuccessCountList) {
            taskSuccessCountMap.set(item.rssId, item._sum.successCount || 0)
        }
        const userRssList = _.flatMap(_userRssList, item => {
            const taskSuccessCount = taskSuccessCountMap.get(item.rssId) || 0
            if (taskSuccessCount > 0) {
                return [{
                    ...item,
                    taskSuccessCount
                }]
            }
            return []
        })
        return userRssList
    }
}
