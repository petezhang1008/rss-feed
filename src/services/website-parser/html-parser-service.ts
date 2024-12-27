
export const HtmlParserService = Symbol('HtmlParserService')

export interface HtmlParserService {
    getWebsiteInfo(url: string): Promise<WebsiteInfo>
    getTargetLinks(url: string, selector: string): Promise<string[]>
}

export interface WebsiteInfo {
    title: string
    description?: string
    image?: string
    author?: string
    keywords?: string
    domain: string
    link: string
    icon?: string
}
