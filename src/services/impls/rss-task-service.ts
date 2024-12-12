import { inject, injectable } from "inversify"
import { RssTaskService } from "../rss-task-service"
import { WebsiteParserService } from "../website-parser-service"
import { addFeedLinkQueue } from "@/lib/queue"
import { GenerateRssParams } from "@/models/rss-generator-model"
import { RssGeneratorType } from "@/enums/rss"
import { RssParserService } from "../rss-parser-service"
import { UrlFormateService } from "../url-formate-service"
import { FeedService } from "../feed-service"

@injectable()
export class RssTaskServiceImpl implements RssTaskService {
    constructor(
        @inject(WebsiteParserService)
        private _websiteParserService: WebsiteParserService,
        @inject(RssParserService)
        private _rssParserService: RssParserService,
        @inject(UrlFormateService)
        private _urlFormateService: UrlFormateService,
        @inject(FeedService)
        private _feedService: FeedService
    ) {
    }

    async consumeRssTask(data: GenerateRssParams): Promise<void> {
        if (data.type === RssGeneratorType.WEBSITE) {
            await this._initWebsiteGenerator(data)
        } else {
            await this._initRssSubscribeGenerator(data)
        }
    }

    async _initWebsiteGenerator(data: GenerateRssParams): Promise<void> {
        const fullUrl = this._urlFormateService.getFullUrl(data.website)
        const links = await this._websiteParserService.getTargetLinks(fullUrl, data.selector!)
        for (const link of links) {
            addFeedLinkQueue({
                url: this._urlFormateService.getFullUrl(link, fullUrl),
                rssId: data.id!
            })
        }
    }

    async _initRssSubscribeGenerator(data: GenerateRssParams): Promise<void> {
        const feedList = await this._rssParserService.parseRss(data.website!)
        for (const feed of feedList) {
            addFeedLinkQueue({
                url: this._urlFormateService.getFullUrl(feed.link, data.website),
                rssId: data.id!
            })
        }
    }
}
