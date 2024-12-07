import { injectable } from "inversify";
import { RssSubscribeParserService } from "../rss-subscribe-parser-service";

@injectable()
export class RssSubscribeParserServiceImpl implements RssSubscribeParserService {
    async parseRss(url: string): Promise<void> {
        console.log(url)
    }
}