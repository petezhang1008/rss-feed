import { inject, injectable } from "inversify";
import { WebsiteParserService } from "../website-parser-service";
import { JSDOM } from "jsdom";
import { UrlFormateService } from "../url-formate-service";

@injectable()
export class WebsiteParserServiceImpl implements WebsiteParserService {
    constructor(
        @inject(UrlFormateService)
        private _urlFormateService: UrlFormateService
    ) {
    }

    async getWebsiteDocument(url: string) {
        url = decodeURIComponent(url)
        // 获取网页内容
        const response = await fetch(url);
        const text = await response.text();

        // 使用 JSDOM 解析 HTML
        const dom = new JSDOM(text);
        const document = dom.window.document;
        // 将所有相对路径转换为绝对路径
        const baseUrl = new URL(url);

        // 处理 href 属性
        document.querySelectorAll('[href]').forEach(element => {
            const href = element.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('//')) {
                element.setAttribute('href', new URL(href, baseUrl).href);
            }
        });

        // 处理 src 属性
        document.querySelectorAll('[src]').forEach(element => {
            const src = element.getAttribute('src');
            if (src && !src.startsWith('http') && !src.startsWith('//')) {
                element.setAttribute('src', new URL(src, baseUrl).href);
            }
        });

        // 处理 srcset 属性
        document.querySelectorAll('[srcset]').forEach(element => {
            const srcset = element.getAttribute('srcset');
            if (srcset) {
                const newSrcset = srcset.split(',').map(src => {
                    const [url, size] = src.trim().split(' ');
                    if (url && !url.startsWith('http') && !url.startsWith('//')) {
                        return `${new URL(url, baseUrl).href} ${size || ''}`.trim();
                    }
                    return src;
                }).join(', ');
                element.setAttribute('srcset', newSrcset);
            }
        });
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

    async getWebsiteInfo(url: string) {
        const document = await this.getWebsiteDocument(url)
        const title = document.title || document.querySelector('meta[property="og:title"]')?.getAttribute('content')

        const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') ||
            document.querySelector('meta[property="og:description"]')?.getAttribute('content')
        const metaImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') ||
            document.querySelector('meta[property="twitter:image"]')?.getAttribute('content') ||
            document.querySelector('link[rel="icon"]')?.getAttribute('href')
        const metaAuthor = document.querySelector('meta[name="author"]')?.getAttribute('content') ||
            document.querySelector('meta[property="article:author"]')?.getAttribute('content')
        const metaKeywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content') ||
            document.querySelector('meta[property="og:keywords"]')?.getAttribute('content')

        const domain = this._urlFormateService.getDomain(url)

        return {
            title: title || "",
            description: metaDescription || "",
            image: metaImage || "",
            author: metaAuthor || "",
            keywords: metaKeywords || "",
            domain
        }
    }
}