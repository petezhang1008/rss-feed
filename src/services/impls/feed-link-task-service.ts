import { inject, injectable } from "inversify"
import { FeedTask, FeedTaskService } from "../feed-link-task-service"
import { WebsiteParserService } from "../website-parser-service"

@injectable()
export class FeedTaskServiceImpl implements FeedTaskService {
    constructor(
        @inject(WebsiteParserService)
        private websiteParserService: WebsiteParserService
    ) {
    }
    async consumeFeedTask(data: FeedTask): Promise<void> {
        const document = await this.websiteParserService.getWebsiteDocument(data.url)
        console.log(document)
    }
}
