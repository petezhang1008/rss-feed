'use client'

import { RssGeneratorType } from '@/enums/rss'
import { httpClient } from '@/lib/http-client'
import { UserRss } from '@/types/model'

export type WebsiteSubscribeParams = {
    type: RssGeneratorType,
    website: string,
    selector?: string,
    frequency: string,
    title?: string
}

export async function createRssAction(params: WebsiteSubscribeParams): Promise<UserRss> {
    return httpClient.post('/user/rss', params).then(res => res.data)
}