import { injectable } from "inversify";
import { RssInfo, RssItem, RssParserService } from "../rss-parser-service";
const { XMLParser } = require("fast-xml-parser");

@injectable()
export class RssParserServiceImpl implements RssParserService {

    constructor() { }

    private async fetchRssData(url: string): Promise<string> {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/rss+xml',
            }
        });
        const text = await response.text();
        return text;
    }

    private parseXmlFeedList(xmlText: string): RssItem[] {
        const parser = new XMLParser();
        const xmlJsonObj = parser.parse(xmlText);
        const items = xmlJsonObj.rss.channel.item || xmlJsonObj.feed.entry

        const rssItems: RssItem[] = [];

        items.forEach((item: any) => {
            const title = item.title || "";
            const link = item.link || "";
            const description = item.description || "";
            const pubDate = item.pubDate || new Date().toISOString();
            const author = item.author || "";
            const image = item.image || "";

            rssItems.push({
                title,
                link,
                description,
                pubDate,
                author,
                image
            });
        });

        return rssItems;
    }

    private parseXmlFeedInfo(xmlText: string): RssInfo {
        const parser = new XMLParser();
        const xmlJsonObj = parser.parse(xmlText);
        const data = xmlJsonObj.rss.channel || xmlJsonObj.feed || xmlJsonObj

        const title = data.title || ""
        const description = data.description || ""
        const image = data.image || ""
        const author = data.author || ""
        const keywords = data.keywords || ""

        return {
            title,
            description,
            image,
            author,
            keywords
        }
    }

    async parseRss(url: string): Promise<RssItem[]> {
        const xmlText = await this.fetchRssData(url)
        return this.parseXmlFeedList(xmlText)
    }

    async getRssInfo(url: string): Promise<RssInfo> {
        const xmlText = await this.fetchRssData(url)
        return this.parseXmlFeedInfo(xmlText)
    }

}