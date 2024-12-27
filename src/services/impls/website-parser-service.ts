import { inject, injectable } from "inversify";
import { WebsiteParserService } from "../website-parser-service";
import { JSDOM } from "jsdom";
import { UrlFormateService } from "../url-formate-service";
// import puppeteer from 'puppeteer';
import { TITLE_REGEX } from "@/constants/regex";

@injectable()
export class WebsiteParserServiceImpl implements WebsiteParserService {
    constructor(
        @inject(UrlFormateService)
        private _urlFormateService: UrlFormateService
    ) {
    }
    private _fetchHtml(url: string) {
        return fetch(url).then(res => res.text())
    }

    async getWebsiteDocument(url: string) {
        url = decodeURIComponent(url)
        const html = await this._fetchHtml(url)

        // 使用 JSDOM 解析 HTML
        const dom = new JSDOM(html);
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

    private _formatTitle(title: string) {
        if (!title) return title
        const parts = title.split(TITLE_REGEX);
        return parts[0].trim()
    }

    private _getMetaValueByProperty(document: Document, property: string) {
        return document.querySelectorAll(`meta[property="${property}"]`)[0]?.getAttribute('content') ||
            document.querySelectorAll(`meta[name="${property}"]`)[0]?.getAttribute('content') ||
            document.querySelectorAll(`meta[name="og:${property}"]`)[0]?.getAttribute('content') ||
            document.querySelectorAll(`meta[name="twitter:${property}"]`)[0]?.getAttribute('content') ||
            document.querySelectorAll(`meta[property="og:${property}"]`)[0]?.getAttribute('content') ||
            document.querySelectorAll(`meta[property="twitter:${property}"]`)[0]?.getAttribute('content') ||
            document.querySelectorAll(`meta[property="article:${property}"]`)[0]?.getAttribute('content') ||
            document.querySelectorAll(`meta[property="dc:${property}"]`)[0]?.getAttribute('content') ||
            document.querySelectorAll(`meta[property="schema:${property}"]`)[0]?.getAttribute('content')
    }

    private _getWebsiteIcon(document: Document) {
        return document.querySelectorAll('link[rel="icon"]')[0]?.getAttribute('href') ||
            document.querySelectorAll('link[rel="shortcut icon"]')[0]?.getAttribute('href') ||
            document.querySelectorAll('link[rel="apple-touch-icon"]')[0]?.getAttribute('href') ||
            document.querySelectorAll('link[rel="apple-touch-icon-precomposed"]')[0]?.getAttribute('href') ||
            document.querySelectorAll('link[rel="apple-touch-icon-precomposed"]')[0]?.getAttribute('href') ||
            document.querySelectorAll('link[rel="mask-icon"]')[0]?.getAttribute('href')
    }

    async getWebsiteInfo(url: string) {
        const document = await this.getWebsiteDocument(url)

        const title = this._getMetaValueByProperty(document, 'title') || document.title
        const metaDescription = this._getMetaValueByProperty(document, 'description')
        const metaImage = this._getMetaValueByProperty(document, 'image')
        const metaAuthor = this._getMetaValueByProperty(document, 'author')
        const metaKeywords = this._getMetaValueByProperty(document, 'keywords')
        const metaPubDate = this._getMetaValueByProperty(document, 'published_time') ||
            this._getMetaValueByProperty(document, 'modified_time')
        const icon = this._getWebsiteIcon(document)

        const domain = this._urlFormateService.getDomain(url)
        const image = metaImage ? this._urlFormateService.getFullUrl(metaImage, url) : null
        const link = url

        return {
            title: this._formatTitle(title || ""),
            description: metaDescription || "",
            image: image || "",
            icon: icon || "",
            author: metaAuthor || "",
            keywords: metaKeywords || "",
            pubDate: metaPubDate ? new Date(metaPubDate) : null,
            domain,
            link
        }
    }
}