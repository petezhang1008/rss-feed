export const WebsiteParserService = Symbol('WebsiteParserService')

export interface WebsiteParserService {
    getWebsiteDocument(url: string): Promise<Document>
    getTargetLinks(url: string, selector: string): Promise<string[]>
    getWebsiteInfo(url: string): Promise<WebsiteInfo>
}


export interface WebsiteInfo {
    title: string
    description?: string
    image?: string
    author?: string
    keywords?: string
}
