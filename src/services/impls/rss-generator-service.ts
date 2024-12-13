import { inject, injectable } from "inversify";
import { RssGeneratorService } from "../rss-generator-service";
import {
    GenerateRssParams,
    PaginationQueryGenerateRssListParams,
    PutGenerateRssParams,
    QueryGenerateRssListParams,
    RssGeneratorModel
} from "@/models/rss-generator-model";
import { RssGeneratorType } from "@/enums/rss";
import { RssParserService } from "../rss-parser-service";
import { WebsiteInfo, WebsiteParserService } from "../website-parser-service";
import { FeedModel } from "@/models/feed-model";

@injectable()
export class RssGeneratorServiceImpl implements RssGeneratorService {
    constructor(
        @inject(RssGeneratorModel)
        private _rssGeneratorModel: RssGeneratorModel,
        @inject(RssParserService)
        private _rssParserService: RssParserService,
        @inject(WebsiteParserService)
        private _websiteParserService: WebsiteParserService,
        @inject(FeedModel)
        private _feedModel: FeedModel
    ) {
    }
    getGenerateRss(id: string) {
        return this._rssGeneratorModel.getGenerateRss(id)
    }
    async createGenerateRss(data: GenerateRssParams) {
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
        return this._rssGeneratorModel.createGenerateRss(data)
    }
    putGenerateRss(id: string, data: GenerateRssParams) {
        return this._rssGeneratorModel.putGenerateRss(id, data)
    }
    async deleteGenerateRss(id: string, userId: string) {
        await this._feedModel.deleteFeedByRssId(id)
        return this._rssGeneratorModel.deleteGenerateRss(id, userId)
    }
    queryGenerateRssList(data: PaginationQueryGenerateRssListParams) {
        return this._rssGeneratorModel.queryGenerateRssList(data)
    }
    queryAllRssList(data: QueryGenerateRssListParams) {
        return this._rssGeneratorModel.queryAllRssList(data)
    }
}
