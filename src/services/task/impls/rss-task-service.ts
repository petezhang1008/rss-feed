import { inject, injectable } from "inversify"
import { RssTaskService } from "../task/rss-task-service"
import { WebsiteParserService } from "../website-parser-service"
import { addFeedLinkQueue } from "@/lib/queue"
import { RssGeneratorType } from "@/enums/rss"
import { RssParserService } from "../rss-parser-service"
import { UrlFormateService } from "../website-parser/url-formate-service"
import { TaskService, TaskResult } from "../prisma/task-service"
import { FeedService } from "../prisma/feed-service"
import { Rss } from "@/types/model"

@injectable()
export class RssTaskServiceImpl implements RssTaskService {
    constructor(
        @inject(WebsiteParserService)
        private _websiteParserService: WebsiteParserService,
        @inject(RssParserService)
        private _rssParserService: RssParserService,
        @inject(UrlFormateService)
        private _urlFormateService: UrlFormateService,
        @inject(TaskService)
        private _executeTaskService: TaskService,
        @inject(FeedService)
        private _feedService: FeedService
    ) {
    }

    async consumeRssTask(data: Rss): Promise<TaskResult> {
        if (data.type === RssGeneratorType.WEBSITE) {
            return this._initWebsiteGenerator(data)
        } else {
            return this._initRssSubscribeGenerator(data)
        }
    }

    async _initWebsiteGenerator(data: Rss): Promise<TaskResult> {
        const fullUrl = this._urlFormateService.getFullUrl(data.website)
        const links = await this._websiteParserService.getTargetLinks(fullUrl, data.selector!)
        const _targetPages = links.map(link => this._urlFormateService.getFullUrl(link, fullUrl))

        const _feeds = await this._feedService.getFeedByLinks(_targetPages, data.id!)
        const _links = _feeds.map(item => item.link)
        const targetPages = _targetPages.filter(item => {
            return !_links.includes(item)
        })
        if (targetPages.length === 0) {
            throw new Error('No Feed To Update')
        }
        const task = await this._executeTaskService.startTask({
            rssId: data.id!,
            count: targetPages.length,
        })
        addFeedLinkQueue({
            targetPages,
            rssId: data.id!,
            taskId: task.id,
        })
        return task
    }

    async _initRssSubscribeGenerator(data: Rss): Promise<TaskResult> {
        const feedList = await this._rssParserService.parseRss(data.website!)
        const _targetPages = feedList.map(feed => this._urlFormateService.getFullUrl(feed.link, data.website))
        const _feeds = await this._feedService.getFeedByLinks(_targetPages, data.id!)
        const _links = _feeds.map(item => item.link)
        const targetPages = _targetPages.filter(item => {
            return !_links.includes(item)
        })
        if (targetPages.length === 0) {
            throw new Error('No Feed To Update')
        }
        const task = await this._executeTaskService.startTask({
            rssId: data.id!,
            count: targetPages.length,
        })
        addFeedLinkQueue({
            targetPages,
            rssId: data.id!,
            taskId: task.id
        })
        return task
    }
}
