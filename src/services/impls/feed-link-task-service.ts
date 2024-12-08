import { inject, injectable } from "inversify"
import { FeedTask, FeedLinkTaskService, FeedDataFromParser } from "../feed-link-task-service"
import { WebsiteParserService } from "../website-parser-service"
import { FeedService } from "../feed-service"

@injectable()
export class FeedLinkTaskServiceImpl implements FeedLinkTaskService {
    constructor(
        @inject(WebsiteParserService)
        private websiteParserService: WebsiteParserService,
        @inject(FeedService)
        private feedService: FeedService
    ) {
    }
    async consumeFeedTask(data: FeedTask): Promise<void> {
        const document = await this.websiteParserService.getWebsiteDocument(data.url)
        const feed = this._parseFeed(document, data)
        try {
            await this.feedService.createFeed(feed)
        } catch (error) {
            console.error(error)
        }
    }

    private _parseFeed(document: Document, data: FeedTask): FeedDataFromParser {
        const title = document.title
        const domain = new URL(data.url).hostname

        return {
            rssId: data.rssId,
            link: data.url,
            title,
            domain
        }
    }
}
