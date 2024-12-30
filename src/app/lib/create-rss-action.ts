'use client'
import { RssGeneratorType } from '@/enums/rss'
import { httpClient } from '@/lib/http-client'
import { Rss, UserRss } from '@/types/model'
import { CreateUserRssResponse } from '../api/user/rss/route'
import { CreateRssResponse } from '../api/rss/route'

export type WebsiteSubscribeParams = {
    type: RssGeneratorType,
    website: string,
    selector?: string,
    title?: string
}

export async function createUserRssAction(params: WebsiteSubscribeParams): Promise<CreateUserRssResponse> {
    return httpClient.post('/user/rss', params).then(res => res.data)
}

export async function createRssAction(params: WebsiteSubscribeParams): Promise<CreateRssResponse> {
    return httpClient.post('/rss', params).then(res => res.data)
}

export async function createRssTaskAction(params: WebsiteSubscribeParams, userId?: string): Promise<CreateUserRssResponse | CreateRssResponse> {
    return userId ? createUserRssAction(params) : createRssAction(params)
}

