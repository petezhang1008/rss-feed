import { CreateUserRssParams, PaginationUserRssParams, QueryUserRssParams, UpdateUserRssParams, UserRssModel } from "@/models/user-rss-model";
import { inject, injectable } from "inversify";
import { CreateUserRssByRssIdParams, UserRssService } from "../prisma/user-rss-service";
import { RssService } from "../prisma/rss-service";

@injectable()
export class UserRssServiceImpl implements UserRssService {
    constructor(
        @inject(UserRssModel)
        private _userRssModel: UserRssModel,
        @inject(RssService)
        private _rssService: RssService
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
                selector: data.selector || null,
                title: data.title
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
}