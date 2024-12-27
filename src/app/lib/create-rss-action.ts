'use client'
import { RssGeneratorType } from '@/enums/rss'
import { httpClient } from '@/lib/http-client'
import { Rss, UserRss } from '@/types/model'

export type WebsiteSubscribeParams = {
    type: RssGeneratorType,
    website: string,
    selector?: string,
    title?: string
}

export async function createUserRssAction(params: WebsiteSubscribeParams): Promise<UserRss> {
    return httpClient.post('/user/rss', params).then(res => res.data)
}

export async function createRssAction(params: WebsiteSubscribeParams): Promise<Rss> {
    return httpClient.post('/rss', params).then(res => res.data)
}


