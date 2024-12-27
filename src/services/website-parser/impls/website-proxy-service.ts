import { injectable, inject } from "inversify";
import { FetchHtmlService } from "../fetch-html-service";
import { WebsiteProxyService } from "../website-proxy-service";
import cheerio from "cheerio";

@injectable()
export class WebsiteProxyServiceImpl implements WebsiteProxyService {
    constructor(
        @inject(FetchHtmlService)
        private fetchHtmlService: FetchHtmlService,
    ) { }

    async getProxyHtml(url: string): Promise<string> {
        const html = await this.fetchHtmlService.fetchHtml(url)
        const $ = cheerio.load(html)
        const baseUrl = new URL(url);
        $('script').remove()

        $('[href]').each((i, element) => {
            const href = $(element).attr('href')
            if (href && !href.startsWith('http') && !href.startsWith('//')) {
                $(element).attr('href', new URL(href, baseUrl).href)
            }
        })

        $('[src]').each((i, element) => {
            const src = $(element).attr('src')
            if (src && !src.startsWith('http') && !src.startsWith('//')) {
                $(element).attr('src', new URL(src, baseUrl).href)
            }
        })

        $('[srcset]').each((i, element) => {
            const srcset = $(element).attr('srcset')
            if (srcset) {
                $(element).attr('srcset', srcset.split(',').map(src => {
                    const [url, size] = src.trim().split(' ');
                    if (url && !url.startsWith('http') && !url.startsWith('//')) {
                        return `${new URL(url, baseUrl).href} ${size || ''}`.trim();
                    }
                    return src;
                }).join(', '))
            }
        })

        return $.html()
    }
}