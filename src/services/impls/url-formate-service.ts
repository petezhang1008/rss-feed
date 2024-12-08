import { UrlFormateService } from "../url-formate-service";
import { injectable } from "inversify";
const URL = require('url')


@injectable()
export class UrlFormateServiceImpl implements UrlFormateService {
    getFullUrl(url: string, website?: string): string {
        const { protocol: websiteProtocol, host: websiteHost } = URL.parse(website || '')
        // 去掉前后的空格
        url = url.trim();
        // 检查是否以双斜杠开头
        if (url.startsWith('//')) {
            url = `${websiteProtocol}${url}`; // 添加协议
        } else if (url.startsWith('/')) {
            url = `${websiteProtocol}//${websiteHost}${url}`;
        } else if (!url.startsWith('http://') && !url.startsWith('https://')) {
            // 如果没有协议，则添加 "https://"
            url = `${websiteProtocol}//${url}`;
        }
        return url
    }
}

