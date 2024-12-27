import { ContainerModule } from "inversify"
import { RssTaskServiceImpl } from "./impls/rss-task-service"
import { RssTaskService } from "./rss-task-service"
import { FeedLinkTaskService } from "./feed-link-task-service"
import { FeedLinkTaskServiceImpl } from "./impls/feed-link-task-service"

export const task = new ContainerModule((bind) => {
    bind(RssTaskService).to(RssTaskServiceImpl)
    bind(FeedLinkTaskService).to(FeedLinkTaskServiceImpl)
})