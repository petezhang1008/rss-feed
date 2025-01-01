import { inject, injectable } from "inversify"
import { RssTaskService } from "../rss-task-service"
import { addFeedLinkQueue } from "@/lib/queue"
import { RssGeneratorType } from "@/enums/rss"
import { Rss } from "@/types/model"
import { FeedService } from "@/services/prisma/feed-service"
import { TaskService, TaskResult } from "@/services/prisma/task-service"
import { UrlFormateService } from "@/services/website-parser/url-formate-service"
import { HtmlParserService } from "@/services/website-parser/html-parser-service"
import { XmlParserService } from "@/services/website-parser/xml-parser-service"

@injectable()
export class RssTaskServiceImpl implements RssTaskService {
    constructor(
        @inject(HtmlParserService)
        private _htmlParserService: HtmlParserService,
        @inject(XmlParserService)
        private _xmlParserService: XmlParserService,
        @inject(UrlFormateService)
        private _urlFormateService: UrlFormateService,
        @inject(TaskService)
        private _executeTaskService: TaskService,
        @inject(FeedService)
        private _feedService: FeedService
    ) {
    }

    async consumeRssTask(data: Rss): Promise<TaskResult | null> {
        try {
            if (data.type === RssGeneratorType.WEBSITE) {
                return await this._initWebsiteGenerator(data)
            } else {
                return await this._initRssSubscribeGenerator(data)
            }
        } catch (error) {
            console.error(error)
            return null
        }
    }

    async _initWebsiteGenerator(data: Rss): Promise<TaskResult | null> {
        const fullUrl = data.website
        const links = await this._htmlParserService.getTargetLinks(fullUrl, data.selector!)
        const _targetPages = links.map(link => this._urlFormateService.getFullUrl(link, fullUrl))

        const _feeds = await this._feedService.getFeedByLinks(_targetPages, data.id!)
        const _links = _feeds.map(item => item.link)
        const targetPages = _targetPages.filter(item => {
            return !_links.includes(item)
        })
        if (targetPages.length === 0) {
            console.log('====No Feed To Update Website=======', data.title)
            return null
        }
        if (!data.id) {
            throw new Error('No Rss Id')
        }
        const task = await this._executeTaskService.startTask({
            rssId: data.id!,
            count: targetPages.length,
        })
        await addFeedLinkQueue({
            targetPages,
            rssId: data.id!,
            taskId: task.id,
        })
        return task
    }

    async _initRssSubscribeGenerator(data: Rss): Promise<TaskResult | null> {
        const rssInfo = await this._xmlParserService.getRssInfo(data.website!)
        const _targetPages = rssInfo.items?.map(feed => this._urlFormateService.getFullUrl(feed.link, data.website)) || []
        const _feeds = await this._feedService.getFeedByLinks(_targetPages, data.id!)
        const _links = _feeds.map(item => item.link)
        const targetPages = _targetPages.filter(item => {
            return !_links.includes(item)
        })
        if (targetPages.length === 0) {
            console.log('====No Feed To Update Rss Subscribe=======', rssInfo.title)
            return null
            // throw new Error('No Feed To Update')
        }
        if (!data.id) {
            throw new Error('No Rss Id')
        }
        const task = await this._executeTaskService.startTask({
            rssId: data.id!,
            count: targetPages.length,
        })
        console.log('===Start Add Feed Link Queue===', data.id, 'TaskId:', task.id, 'TargetPages:', targetPages.length)
        await addFeedLinkQueue({
            targetPages,
            rssId: data.id!,
            taskId: task.id
        })
        return task
    }
}
