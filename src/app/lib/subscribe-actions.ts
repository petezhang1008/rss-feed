'use server'
import { RssGeneratorType } from '@/enums/rss'
import { injectService } from '@/inversify.config'
import { RssGeneratorService } from '@/services/rss-generator-service'
import { RssTaskService } from '@/services/rss-task-service'

export type WebsiteSubscribeParams = {
    type: RssGeneratorType.WEBSITE,
    website: string,
    selector: string,
    frequency: string,
    title: string
}

export async function subscribeWebsiteAction(params: WebsiteSubscribeParams) {
    const rssGeneratorService = injectService<RssGeneratorService>(RssGeneratorService)
    const rssTaskService = injectService<RssTaskService>(RssTaskService)
    const rssGenerator = await rssGeneratorService.createGenerateRss({
        ...params
    })
    rssTaskService.consumeRssTask(rssGenerator)
    return rssGenerator
}