import { inject, injectable } from "inversify"
import { FeedTask, FeedLinkTaskService } from "../feed-link-task-service"
import { FeedService } from "../../prisma/feed-service"
import { TaskService } from "../../prisma/task-service"
import _ from "lodash"
import { HtmlParserService, WebsiteInfo } from "@/services/website-parser/html-parser-service"

@injectable()
export class FeedLinkTaskServiceImpl implements FeedLinkTaskService {
    constructor(
        @inject(HtmlParserService)
        private _htmlParserService: HtmlParserService,
        @inject(FeedService)
        private feedService: FeedService,
        @inject(TaskService)
        private _executeTaskService: TaskService
    ) {
    }

    private _queue: string[] = []
    private _processQueue = async () => {
        const result: WebsiteInfo[] = []
        while (this._queue?.length > 0) {
            const url = this._queue.shift(); // 从队列中取出一个 URL
            if (url) {
                try {
                    const info = await this._htmlParserService.getWebsiteInfo(url)
                    if (info && info.title) {
                        result.push(info); // 存储页面内容
                    }
                } catch (error) {
                    this._queue = []
                    console.error('=====Failed Url=====', url)
                }
            }
        }
        return result
    };

    async consumeFeedTask(data: FeedTask): Promise<void> {
        this._queue = data.targetPages
        const result = await this._processQueue()
        this._executeTaskService.finishTask(data.taskId, {
            successCount: result?.length || 0,
        })
        if (!result || result.length === 0) {
            console.log('==================No Feed To Create================', data.rssId)
            return
        };
        console.log('===Create Batch Feed, TaskLength:', result?.length)
        try {
            const paramList = _.map(result, info => {
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
