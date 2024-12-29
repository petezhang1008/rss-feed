import { injectable } from "inversify";
import { FetchHtmlService } from "../fetch-html-service";
import fetch from 'node-fetch'

@injectable()
export class FetchHtmlServiceImpl implements FetchHtmlService {
    async fetchHtml(url: string): Promise<string> {
        return fetch(url, {
            timeout: 5000,
        }).then(res => res.text())
    }
}