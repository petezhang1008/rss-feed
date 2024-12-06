'use server'
import { RssGeneratorType } from '@/enums/rss'
import { injectService } from '@/inversify.config'
import { RssGeneratorService } from '@/services/rss-generator-service'

export type WebsiteSubscribeParams = {
    type: RssGeneratorType.WEBSITE,
    website: string,
    selector: string,
    frequency: string
}

export async function subscribeWebsiteAction(params: WebsiteSubscribeParams) {
    const rssGeneratorService = injectService<RssGeneratorService>(RssGeneratorService)
    const rssGenerator = await rssGeneratorService.createGenerateRss({
        ...params
    })
    return rssGenerator
}