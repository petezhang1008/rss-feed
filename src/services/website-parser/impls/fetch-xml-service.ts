import { FetchXmlService } from "../fetch-xml-service"
import fetch from 'node-fetch'

export class FetchXmlServiceImpl implements FetchXmlService {
    async fetchXml(url: string): Promise<string> {
        return fetch(url).then(res => res.text())
    }
}