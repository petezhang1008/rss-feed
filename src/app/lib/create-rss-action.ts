'use client'

import { RssGeneratorType } from '@/enums/rss'
import { httpClient } from '@/lib/http-client'
import { RssGenerator } from '@prisma/client'

export type WebsiteSubscribeParams = {
    type: RssGeneratorType,
    website: string,
    selector?: string,
    frequency: string,
    title?: string
}

export async function createRssAction(params: WebsiteSubscribeParams): Promise<RssGenerator> {
    return httpClient.post('/rss-generator', params).then(res => res.data)
}