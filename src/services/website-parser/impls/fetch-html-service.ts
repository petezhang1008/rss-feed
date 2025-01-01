import { injectable } from "inversify";
import { FetchHtmlService } from "../fetch-html-service";
import fetch from 'node-fetch'
import iconv from 'iconv-lite'

@injectable()
export class FetchHtmlServiceImpl implements FetchHtmlService {
    async fetchHtml(url: string): Promise<string> {
        return fetch(url, {
            timeout: 5000,
        }).then(res => res.text())
    }

    async fetchAndEncodeHtml(url: string): Promise<string> {
        const response = await fetch(url, {
            timeout: 5000,
        })
        const contentType = response.headers.get('content-type');
        let charset = 'gb2312'; // 默认编码为 UTF-8
        // 检查响应头中的编码
        if (contentType) {
            const match = contentType.match(/charset=([^;]+)/);
            if (match && match[1]) {
                charset = match[1].trim();
            }
        }
        // 获取原始字节数据
        const buffer = await response.buffer();
        let html;

        // 根据编码类型进行转换
        switch (charset.toLowerCase()) {
            case 'gb2312':
                html = iconv.decode(buffer, 'gb2312');
                break;
            case 'gbk':
                html = iconv.decode(buffer, 'gbk');
                break;
            case 'iso-8859-1':
                html = iconv.decode(buffer, 'latin1');
                break;
            case 'windows-1252':
                html = iconv.decode(buffer, 'windows-1252');
                break;
            case 'shift_jis':
                html = iconv.decode(buffer, 'shift_jis');
                break;
            case 'utf-16':
                html = iconv.decode(buffer, 'utf-16');
                break;
            case 'euc-jp':
                html = iconv.decode(buffer, 'euc-jp');
                break;
            default:
                html = buffer.toString('utf-8');
                break;
        }
        return html
    }
}
