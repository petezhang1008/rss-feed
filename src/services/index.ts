import { ContainerModule } from "inversify";
import { RssService } from "./rss-service";
import { RssServiceImpl } from "./impls/rss-service";
import { WebsiteParserServiceImpl } from "./impls/website-parser-service";
import { WebsiteParserService } from "./website-parser-service";
import { RssParserService } from "./rss-parser-service";
import { RssParserServiceImpl } from "./impls/rss-parser-service";
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
import { LoginServiceImpl } from "./impls/login-service";
import { LoginService } from "./login-service";
import { TaskService } from "./task-service";
import { ExecuteTaskServiceImpl } from "./impls/task-service";
import { UserRssServiceImpl } from "./impls/user-rss-service";
import { UserRssService } from "./user-rss-service";


export const services = new ContainerModule((bind) => {
    bind(RssService).to(RssServiceImpl)
    bind(WebsiteParserService).to(WebsiteParserServiceImpl)
    bind(RssParserService).to(RssParserServiceImpl)
    bind(RssTaskService).to(RssTaskServiceImpl)
    bind(FeedService).to(FeedServiceImpl)
    bind(FeedLinkTaskService).to(FeedLinkTaskServiceImpl)
    bind(UrlFormateService).to(UrlFormateServiceImpl)
    bind(BundleService).to(BundleServiceImpl)
    bind(UserService).to(UserServiceImpl)
    bind(LoginService).to(LoginServiceImpl)
    bind(TaskService).to(ExecuteTaskServiceImpl)
    bind(UserRssService).to(UserRssServiceImpl)
})
