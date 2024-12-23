import { inject, injectable } from "inversify";
import { RssService } from "../rss-service";
import {
    CreateRssParams,
    GetRssByTypeWebsiteSelectorParams,
    PaginationRssListParams,
    RssModel,
    UpdateRssParams
} from "@/models/rss-model";
import { RssGeneratorType } from "@/enums/rss";
import { RssParserService } from "../rss-parser-service";
import { WebsiteInfo, WebsiteParserService } from "../website-parser-service";
import { FeedModel } from "@/models/feed-model";

@injectable()
export class RssServiceImpl implements RssService {
    constructor(
        @inject(RssModel)
        private _rssModel: RssModel,
        @inject(RssParserService)
        private _rssParserService: RssParserService,
        @inject(WebsiteParserService)
        private _websiteParserService: WebsiteParserService,
        @inject(FeedModel)
        private _feedModel: FeedModel
    ) {
    }
    getRss(id: string) {
        return this._rssModel.getRss(id)
    }
    async createRss(data: CreateRssParams) {
        if (data.type === RssGeneratorType.RSS) {
            const rssInfo = await this._rssParserService.getRssInfo(data.website)
            let info: WebsiteInfo | null = null
            if (rssInfo.link) {
                info = await this._websiteParserService.getWebsiteInfo(rssInfo.link)
            }
            data.title = info?.title || rssInfo.title
            data.description = info?.description || rssInfo.description
            data.image = info?.image || rssInfo.image
            data.author = info?.author || rssInfo.author
            data.keywords = info?.keywords || rssInfo.keywords
            data.link = rssInfo.link
        } else {
            const info = await this._websiteParserService.getWebsiteInfo(data.website)
            data = {
                ...data,
                title: info.title,
                description: info.description,
                image: info.image,
                author: info.author,
                keywords: info.keywords,
                link: info.link
            }
        }
        if (!data.title) {
            throw new Error('Title is required')
        }
        return this._rssModel.createRss(data)
    }
    getRssByTypeWebsiteSelector(data: GetRssByTypeWebsiteSelectorParams) {
        return this._rssModel.getRssByTypeWebsiteSelector(data)
    }
    updateRss(id: string, data: UpdateRssParams) {
        return this._rssModel.updateRss(id, data)
    }
    queryRssList(data: PaginationRssListParams) {
        return this._rssModel.queryRssList(data)
    }
}
