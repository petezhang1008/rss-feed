import { inject, injectable } from "inversify";
import { RssGeneratorService } from "../rss-generator-service";
import { RssGenerator } from "@prisma/client";
import { GenerateRssParams, PaginationQueryGenerateRssListParams, PutGenerateRssParams, QueryGenerateRssListParams, RssGeneratorModel } from "@/models/rss-generator-model";
import { RssGeneratorType } from "@/enums/rss";
import { RssParserService } from "../rss-parser-service";
import { WebsiteParserService } from "../website-parser-service";

@injectable()
export class RssGeneratorServiceImpl implements RssGeneratorService {
    constructor(
        @inject(RssGeneratorModel)
        private _rssGeneratorModel: RssGeneratorModel,
        @inject(RssParserService)
        private _rssParserService: RssParserService,
        @inject(WebsiteParserService)
        private _websiteParserService: WebsiteParserService
    ) {
    }
    getGenerateRss(id: string) {
        return this._rssGeneratorModel.getGenerateRss(id)
    }
    async createGenerateRss(data: GenerateRssParams) {
        if (data.type === RssGeneratorType.RSS) {
            const rssInfo = await this._rssParserService.getRssInfo(data.website)
            data.title = rssInfo.title
            data.description = rssInfo.description
            data.image = rssInfo.image
            data.author = rssInfo.author
            data.keywords = rssInfo.keywords
        } else {
            const info = await this._websiteParserService.getWebsiteInfo(data.website)
            data = {
                ...data,
                title: info.title,
                description: info.description,
                image: info.image,
                author: info.author,
                keywords: info.keywords
            }
        }
        return this._rssGeneratorModel.createGenerateRss(data)
    }
    putGenerateRss(data: PutGenerateRssParams) {
        return this._rssGeneratorModel.putGenerateRss(data)
    }
    deleteGenerateRss(id: string) {
        return this._rssGeneratorModel.deleteGenerateRss(id)
    }
    queryGenerateRssList(data: PaginationQueryGenerateRssListParams) {
        return this._rssGeneratorModel.queryGenerateRssList(data)
    }
    queryAllRssList(data: QueryGenerateRssListParams) {
        return this._rssGeneratorModel.queryAllRssList(data)
    }
}
