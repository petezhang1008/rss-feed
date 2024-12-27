import { fetchXmlHttpClient } from "@/lib/service-http-client"
import { FetchXmlService } from "../fetch-xml-service"


export class FetchXmlServiceImpl implements FetchXmlService {
    fetchXml(url: string): Promise<string> {
        return fetchXmlHttpClient(url)
    }
}