import { inject, injectable } from "inversify";
import { HtmlParserService } from "../html-parser-service";
import * as cheerio from 'cheerio';
import { UrlFormateService } from "@/services/website-parser/url-formate-service";
import { WebsiteProxyService } from "../website-proxy-service";
import { FetchHtmlService } from "../fetch-html-service";
import _ from "lodash";


@injectable()
export class HtmlParserServiceImpl implements HtmlParserService {
    constructor(
        @inject(WebsiteProxyService)
        private _websiteProxyService: WebsiteProxyService,
        @inject(UrlFormateService)
        private _urlFormateService: UrlFormateService,
        @inject(FetchHtmlService)
        private _fetchHtmlService: FetchHtmlService
    ) { }

    private _getMetaValueByProperty($: cheerio.CheerioAPI, property: string) {
        return $(`meta[property="${property}"]`).attr('content') ||
            $(`meta[name="${property}"]`).attr('content') ||
            $(`meta[name="og:${property}"]`).attr('content') ||
            $(`meta[name="twitter:${property}"]`).attr('content') ||
            $(`meta[property="og:${property}"]`).attr('content') ||
            $(`meta[property="twitter:${property}"]`).attr('content') ||
            $(`meta[property="article:${property}"]`).attr('content') ||
            $(`meta[property="dc:${property}"]`).attr('content') ||
            $(`meta[property="schema:${property}"]`).attr('content')
    }

    private _getWebsiteIcon($: cheerio.CheerioAPI) {
        return $('link[rel="icon"]').attr('href') ||
            $('link[rel="shortcut icon"]').attr('href') ||
            $('link[rel="apple-touch-icon"]').attr('href') ||
            $('link[rel="apple-touch-icon-precomposed"]').attr('href') ||
            $('link[rel="icon"]').attr('href')
    }

    private _formatTitle(title: string) {
        return title
    }
    async getWebsiteInfo(url: string) {
        const html = await this._fetchHtmlService.fetchHtml(url)
        const $ = cheerio.load(html)
        const title = this._getMetaValueByProperty($, 'title') || $('head title').first().text()
        const metaDescription = this._getMetaValueByProperty($, 'description')
        const metaImage = this._getMetaValueByProperty($, 'image')
        const metaAuthor = this._getMetaValueByProperty($, 'author')
        const metaKeywords = this._getMetaValueByProperty($, 'keywords')
        const metaPubDate = this._getMetaValueByProperty($, 'published_time') ||
            this._getMetaValueByProperty($, 'modified_time')
        const icon = this._getWebsiteIcon($)

        const domain = this._urlFormateService.getDomain(url)
        const image = metaImage ? this._urlFormateService.getFullUrl(metaImage, url) : null
        const link = url

        return {
            title: _.trim(this._formatTitle(title || "")),
            description: _.trim(metaDescription || ""),
            image: _.trim(image || ""),
            icon: _.trim(icon || ""),
            author: _.trim(metaAuthor || ""),
            keywords: _.trim(metaKeywords || ""),
            pubDate: metaPubDate ? new Date(metaPubDate) : null,
            domain,
            link
        }
    }

    async getTargetLinks(url: string, selector: string) {
        const html = await this._fetchHtmlService.fetchHtml(url)
        const $ = cheerio.load(html)
        return $(selector).map((i, el) => $(el).attr('href')).get()
    }
}