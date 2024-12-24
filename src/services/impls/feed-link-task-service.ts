import { inject, injectable } from "inversify"
import { FeedTask, FeedLinkTaskService } from "../feed-link-task-service"
import { WebsiteInfo, WebsiteParserService } from "../website-parser-service"
import { FeedService } from "../feed-service"
import { TaskService } from "../task-service"
import _ from "lodash"

@injectable()
export class FeedLinkTaskServiceImpl implements FeedLinkTaskService {
    constructor(
        @inject(WebsiteParserService)
        private websiteParserService: WebsiteParserService,
        @inject(FeedService)
        private feedService: FeedService,
        @inject(TaskService)
        private _executeTaskService: TaskService
    ) {
    }

    private _queue: string[] = []
    private _result: WebsiteInfo[] = []
    private _processQueue = async () => {
        while (this._queue.length > 0) {
            const url = this._queue.shift(); // 从队列中取出一个 URL
            if (url) {
                try {
                    const info = await this.websiteParserService.getWebsiteInfo(url)
                    if (info && info.title) {
                        this._result.push(info); // 存储页面内容
                    }
                } catch (error) {
                    console.error(error)
                    throw new Error('load feed page data failed')
                }
            }
        }
    };

    async consumeFeedTask(data: FeedTask): Promise<void> {
        this._queue = data.targetPages
        await Promise.all(Array.from({ length: 2 }, this._processQueue))
        if (this._result.length > 0) {
            this._executeTaskService.finishTask(data.taskId, {
                successCount: this._result.length,
            })
        }
        try {
            const paramList = _.map(this._result, info => {
                return {
                    rssId: data.rssId,
                    link: info.link,
                    title: info.title,
                    domain: info.domain,
                    description: info.description,
                    author: info.author,
                    image: info.image
                }
            })
            await this.feedService.createBatchFeed(paramList)
        } catch (error) {
            console.error(error)
        }
    }
}
