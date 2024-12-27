export const XmlParserService = Symbol('XmlParserService')

export interface XmlParserService {
    getRssInfo(url: string): Promise<RssInfo>
}



export interface RssInfo {
    title: string
    description?: string
    image?: string
    author?: string
    keywords?: string
    link?: string
    items?: RssItem[]
}

export interface RssItem {
    title: string
    link: string
    description?: string
    pubDate?: string
    author?: string
    image?: string
    content?: string
}