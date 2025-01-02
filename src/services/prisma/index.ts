import { ContainerModule } from "inversify"
import { RssServiceImpl } from "./impls/rss-service"
import { RssService } from "./rss-service"
import { BundleService } from "./bundle-service"
import { CategoryService } from "./category-service"
import { FeedService } from "./feed-service"
import { BundleServiceImpl } from "./impls/bundle-service"
import { CategoryServiceImpl } from "./impls/category-service"
import { FeedServiceImpl } from "./impls/feed-service"
import { ExecuteTaskServiceImpl } from "./impls/task-service"
import { UserRssServiceImpl } from "./impls/user-rss-service"
import { TaskService } from "./task-service"
import { UserRssService } from "./user-rss-service"
import { UserService } from "./user-service"
import { UserServiceImpl } from "./impls/user-service"

export const prisma = new ContainerModule((bind) => {
    bind(RssService).to(RssServiceImpl)
    bind(FeedService).to(FeedServiceImpl)
    bind(BundleService).to(BundleServiceImpl)
    bind(TaskService).to(ExecuteTaskServiceImpl)
    bind(UserRssService).to(UserRssServiceImpl)
    bind(CategoryService).to(CategoryServiceImpl)
    bind(UserService).to(UserServiceImpl)
})