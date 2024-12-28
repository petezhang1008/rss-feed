import { injectable } from "inversify";
import { FetchHtmlService } from "../fetch-html-service";
import fetch from 'node-fetch'

@injectable()
export class FetchHtmlServiceImpl implements FetchHtmlService {
    async fetchHtml(url: string): Promise<string> {
        return fetch(url).then(res => res.text())
    }
}