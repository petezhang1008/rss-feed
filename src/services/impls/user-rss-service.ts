import { CreateUserRssParams, PaginationUserRssParams, QueryUserRssParams, UpdateUserRssParams, UserRssModel } from "@/models/user-rss-model";
import { inject, injectable } from "inversify";
import { UserRssService } from "../user-rss-service";
import { RssService } from "../rss-service";
import { CreateRssParams } from "@/models/rss-model";

@injectable()
export class UserRssServiceImpl implements UserRssService {
    constructor(
        @inject(UserRssModel)
        private _userRssModel: UserRssModel,
        @inject(RssService)
        private _rssService: RssService
    ) { }

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
            title: data.title
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