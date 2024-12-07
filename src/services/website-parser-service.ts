export const WebsiteParserService = Symbol('WebsiteParserService')

export interface WebsiteParserService {
    getWebsiteDocument(url: string): Promise<Document>
    getTargetLinks(url: string, selector: string): Promise<string[]>
}
