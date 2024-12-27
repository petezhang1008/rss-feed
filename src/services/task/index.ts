import { ContainerModule } from "inversify"
import { RssTaskServiceImpl } from "./impls/rss-task-service"
import { RssTaskService } from "./rss-task-service"

export const task = new ContainerModule((bind) => {
    bind(RssTaskService).to(RssTaskServiceImpl)
})