import { inject, injectable } from "inversify";
import { RssInfo, RssItem, RssParserService } from "../rss-parser-service";
import { TITLE_REGEX } from "@/constants/regex";
import { UrlFormateService } from "../url-formate-service";
const { XMLParser } = require("fast-xml-parser");


@injectable()
export class RssParserServiceImpl implements RssParserService {
    constructor(
        @inject(UrlFormateService)
        private _urlFormateService: UrlFormateService
    ) { }

    private async fetchRssData(url: string): Promise<string> {
        try {
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/rss+xml',
                }
            });
            const text = await response.text();
            return text;
        } catch (error) {
            console.error('rss fetch error', url, error);
            throw error;
        }
    }

    private _formatTitle(title: string) {
        if (!title) return title
        const parts = title.split(TITLE_REGEX);
        return parts[0].trim()
    }

    private _removeHtmlTags(str: string) {
        if (!str) return str
        return str.replace(/<[^>]*>/g, ''); // 使用正则表达式匹配 HTML 标签并替换为空字符串
    }

    private parseXmlFeedList(xmlText: string): RssItem[] {
        const parser = new XMLParser();
        const xmlJsonObj = parser.parse(xmlText);
        const items = xmlJsonObj.rss.channel.item || xmlJsonObj.feed.entry

        const rssItems: RssItem[] = [];

        items.forEach((item: any) => {
            const title = this._formatTitle(item.title || "");
            const link = item.link || "";
            const description = this._removeHtmlTags(item.description || "");
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

    private parseXmlFeedInfo(xmlText: string, url: string): RssInfo {
        const parser = new XMLParser();
        const xmlJsonObj = parser.parse(xmlText);
        const data = xmlJsonObj.rss.channel || xmlJsonObj.feed || xmlJsonObj

        const title = data.title || ""
        const description = data.description || ""
        const image = data.image?.url || ""
        const author = data.author || ""
        const keywords = data.keywords || ""
        const link = data.link || this._urlFormateService.getDomain(url)

        return {
            title,
            description,
            image,
            author,
            keywords,
            link
        }
    }

    async parseRss(url: string): Promise<RssItem[]> {
        const xmlText = await this.fetchRssData(url)
        return this.parseXmlFeedList(xmlText)
    }

    async getRssInfo(url: string): Promise<RssInfo> {
        const xmlText = await this.fetchRssData(url)
        return this.parseXmlFeedInfo(xmlText, url)
    }

}