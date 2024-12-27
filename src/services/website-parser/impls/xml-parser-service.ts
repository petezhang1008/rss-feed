import { inject, injectable } from "inversify";
import { RssInfo, RssItem, XmlParserService } from "../xml-parser-service";
import { TITLE_REGEX } from "@/constants/regex";
import { UrlFormateService } from "@/services/website-parser/url-formate-service";
import { FetchXmlService } from "../fetch-xml-service";
import { XMLParser } from 'fast-xml-parser';

@injectable()
export class XmlParserServiceImpl implements XmlParserService {
    constructor(
        @inject(FetchXmlService)
        private _fetchXmlService: FetchXmlService,
        @inject(UrlFormateService)
        private _urlFormateService: UrlFormateService
    ) { }

    private _formatTitle(title: string) {
        const parts = title.split(TITLE_REGEX);
        return parts[0].trim()
    }

    private _removeHtmlTags(str: string) {
        if (!str) return str
        return str.replace(/<[^>]*>/g, ''); // 使用正则表达式匹配 HTML 标签并替换为空字符串
    }

    private parseXmlFeedList(xmlJsonObj: any): RssItem[] {
        const items = xmlJsonObj.rss?.channel?.item || xmlJsonObj.feed?.entry

        const rssItems: RssItem[] = [];

        items.forEach((item: any) => {
            const title = this._formatTitle(item.title || "");
            const link = item.link || "";
            const description = this._removeHtmlTags(item.description || "");
            const pubDate = item.pubDate || new Date().toISOString();
            const author = item.author || "";
            const image = item.image || "";
            const content = item.content || "";
            rssItems.push({
                title,
                link,
                description,
                pubDate,
                author,
                image,
                content
            });
        });

        return rssItems;
    }

    private parseXmlFeedInfo(xmlJsonObj: any, url: string): RssInfo {
        const data = xmlJsonObj.rss?.channel || xmlJsonObj.feed || xmlJsonObj

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
    async getRssInfo(url: string): Promise<RssInfo> {
        const xmlText = await this._fetchXmlService.fetchXml(url)
        const parser = new XMLParser();
        const xmlJsonObj = parser.parse(xmlText);
        const rssInfo = this.parseXmlFeedInfo(xmlJsonObj, url)
        const rssItems = this.parseXmlFeedList(xmlJsonObj)
        return {
            ...rssInfo,
            items: rssItems
        }
    }
}