import { ContainerModule } from "inversify";
import { RssGeneratorService } from "./rss-generator-service";
import { RssGeneratorServiceImpl } from "./impls/rss-generator-service";
import { WebsiteParserServiceImpl } from "./impls/website-parser-service";
import { WebsiteParserService } from "./website-parser-service";
import { RssSubscribeParserService } from "./rss-subscribe-parser-service";
import { RssSubscribeParserServiceImpl } from "./impls/rss-subscribe-parser-service";
import { RssTaskServiceImpl } from "./impls/rss-task-service";
import { RssTaskService } from "./rss-task-service";
import { FeedService } from "./feed-service";
import { FeedServiceImpl } from "./impls/feed-service";
import { FeedLinkTaskService } from "./feed-link-task-service";
import { FeedLinkTaskServiceImpl } from "./impls/feed-link-task-service";
import { UrlFormateService } from "./url-formate-service";
import { UrlFormateServiceImpl } from "./impls/url-formate-service";
import { BundleService } from "./bundle-service";
import { BundleServiceImpl } from "./impls/bundle-service";
import { UserServiceImpl } from "./impls/user-service";
import { UserService } from "./user-service";


export const services = new ContainerModule((bind) => {
    bind(RssGeneratorService).to(RssGeneratorServiceImpl)
    bind(WebsiteParserService).to(WebsiteParserServiceImpl)
    bind(RssSubscribeParserService).to(RssSubscribeParserServiceImpl)
    bind(RssTaskService).to(RssTaskServiceImpl)
    bind(FeedService).to(FeedServiceImpl)
    bind(FeedLinkTaskService).to(FeedLinkTaskServiceImpl)
    bind(UrlFormateService).to(UrlFormateServiceImpl)
    bind(BundleService).to(BundleServiceImpl)
    bind(UserService).to(UserServiceImpl)
})
