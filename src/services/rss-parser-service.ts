
export const RssParserService = Symbol('RssParserService')

export interface RssParserService {
    parseRss(url: string): Promise<RssItem[]>
    getRssInfo(url: string): Promise<RssInfo>
}

export interface RssInfo {
    title: string
    description?: string
    image?: string
    author?: string
    keywords?: string
}

export interface RssItem {
    title: string
    link: string
    description?: string
    pubDate?: string
    author?: string
    image?: string
}