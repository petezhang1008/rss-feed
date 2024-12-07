
export const RssSubscribeParserService = Symbol('RssSubscribeParserService')

export interface RssSubscribeParserService {
    parseRss(url: string): Promise<void>
}