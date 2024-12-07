import { injectable } from "inversify";
import { WebsiteParserService } from "../website-parser-service";
import { JSDOM } from "jsdom";

@injectable()
export class WebsiteParserServiceImpl implements WebsiteParserService {
    constructor() {
    }

    async getWebsiteDocument(url: string) {
        url = decodeURIComponent(url)
        // 获取网页内容
        const response = await fetch(url);
        const text = await response.text();

        // 使用 JSDOM 解析 HTML
        const dom = new JSDOM(text);
        const document = dom.window.document;
        return document
    }

    async getTargetLinks(url: string, selector: string) {
        const document = await this.getWebsiteDocument(url)
        const elements = document.querySelectorAll(selector)
        const links: string[] = []
        elements.forEach(element => {
            const href = element.getAttribute('href')
            if (href) {
                links.push(href)
            }
        })
        return links
    }
}
