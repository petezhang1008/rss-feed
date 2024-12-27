import { ContainerModule } from "inversify";
import { FetchHtmlService } from "./fetch-html-service";
import { HtmlParserService } from "./html-parser-service";
import { WebsiteProxyService } from "./website-proxy-service";
import { FetchHtmlServiceImpl } from "./impls/fetch-html-service";
import { HtmlParserServiceImpl } from "./impls/html-parser-service";
import { WebsiteProxyServiceImpl } from "./impls/website-proxy-service";
import { UrlFormateServiceImpl } from "./impls/url-formate-service";
import { XmlParserServiceImpl } from "./impls/xml-parser-service";
import { UrlFormateService } from "./url-formate-service";
import { XmlParserService } from "./xml-parser-service";

export const websiteParser = new ContainerModule((bind) => {
    bind(FetchHtmlService).to(FetchHtmlServiceImpl)
    bind(HtmlParserService).to(HtmlParserServiceImpl)
    bind(WebsiteProxyService).to(WebsiteProxyServiceImpl)
    bind(UrlFormateService).to(UrlFormateServiceImpl)
    bind(XmlParserService).to(XmlParserServiceImpl)
})