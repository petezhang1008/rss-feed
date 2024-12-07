import { ContainerModule } from "inversify";
import { RssGeneratorService } from "./rss-generator-service";
import { RssGeneratorServiceImpl } from "./impls/rss-generator-service";
import { WebsiteParserServiceImpl } from "./impls/website-parser-service";
import { WebsiteParserService } from "./website-parser-service";
import { RssSubscribeParserService } from "./rss-subscribe-parser-service";
import { RssSubscribeParserServiceImpl } from "./impls/rss-subscribe-parser-service";
import { RssTaskServiceImpl } from "./impls/rss-task-service";
import { RssTaskService } from "./rss-task-service";
import { RssGeneratorModelImpl } from "@/models/impls/rss-generator-model";
import { RssGeneratorModel } from "@/models/rss-generator-model";


export const services = new ContainerModule((bind) => {
    bind(RssGeneratorService).to(RssGeneratorServiceImpl)
    bind(WebsiteParserService).to(WebsiteParserServiceImpl)
    bind(RssSubscribeParserService).to(RssSubscribeParserServiceImpl)
    bind(RssTaskService).to(RssTaskServiceImpl)
    bind(RssGeneratorModel).to(RssGeneratorModelImpl)
})
