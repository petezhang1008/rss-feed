import { inject, injectable } from "inversify"
import { RssTaskService } from "../rss-task-service"
import { WebsiteParserService } from "../website-parser-service"
import { addFeedLinkQueue } from "@/lib/queue"
import { GenerateRssParams } from "@/models/rss-generator-model"
import { RssGeneratorType } from "@/enums/rss"
import { RssParserService } from "../rss-parser-service"
import { UrlFormateService } from "../url-formate-service"
import { ExecuteTaskService, TaskResult } from "../execute-task-service"
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
        @inject(ExecuteTaskService)
        private _executeTaskService: ExecuteTaskService,
        @inject(FeedService)
        private _feedService: FeedService
    ) {
    }

    async consumeRssTask(data: GenerateRssParams): Promise<TaskResult> {
        if (data.type === RssGeneratorType.WEBSITE) {
            return this._initWebsiteGenerator(data)
        } else {
            return this._initRssSubscribeGenerator(data)
        }
    }

    async _initWebsiteGenerator(data: GenerateRssParams): Promise<TaskResult> {
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

    async _initRssSubscribeGenerator(data: GenerateRssParams): Promise<TaskResult> {
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
