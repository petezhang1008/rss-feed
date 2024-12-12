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
        const info = await this.websiteParserService.getWebsiteInfo(data.url)
        if (!info || !info.title) return
        try {
            await this.feedService.createFeed({
                rssId: data.rssId,
                link: data.url,
                title: info.title,
                domain: info.domain,
                description: info.description,
                author: info.author,
                image: info.image
            })
        } catch (error) {
            console.error(error)
        }
    }
}
