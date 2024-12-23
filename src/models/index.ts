import { ContainerModule } from "inversify";
import { RssModel } from "./rss-model";
import { RssModelImpl } from "./impls/rss-model";
import { TaskModel } from "./task-model";
import { FeedModel } from "./feed-model";
import { FeedModelImpl } from "./impls/feed-model";
import { UserModelImpl } from "./impls/user-model";
import { UserModel } from "./user-model";
import { TaskModelImpl } from "./impls/task-model";
import { BundleModelImpl } from "./impls/bundle-model";
import { BundleModel } from "./bundle-model";
import { UserRssModelImpl } from "./impls/user-rss-model";
import { UserRssModel } from "./user-rss-model";


export const models = new ContainerModule((bind) => {
    bind(RssModel).to(RssModelImpl)
    bind(FeedModel).to(FeedModelImpl)
    bind(UserModel).to(UserModelImpl)
    bind(TaskModel).to(TaskModelImpl)
    bind(BundleModel).to(BundleModelImpl)
    bind(UserRssModel).to(UserRssModelImpl)
})