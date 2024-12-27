import { injectable } from "inversify";
import { FetchHtmlService } from "../fetch-html-service";
import { fetchHtmlHttpClient } from "@/lib/service-http-client";

@injectable()
export class FetchHtmlServiceImpl implements FetchHtmlService {
    fetchHtml(url: string): Promise<string> {
        return fetchHtmlHttpClient(url)
    }
}