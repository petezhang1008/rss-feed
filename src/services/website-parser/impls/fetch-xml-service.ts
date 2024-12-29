import { FetchXmlService } from "../fetch-xml-service"
import fetch from 'node-fetch'

export class FetchXmlServiceImpl implements FetchXmlService {
    async fetchXml(url: string): Promise<string> {
        return fetch(url, {
            timeout: 5000,
        }).then(res => res.text())
    }
}