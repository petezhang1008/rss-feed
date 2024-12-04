import { ContainerModule } from "inversify";
import { RssGeneratorModel } from "./rss-generator-model";
import { RssGeneratorModelImpl } from "./impls/rss-generator-model";
import { ExecuteTaskModel } from "./execute-task-model";
import { FeedModel } from "./feed-model";
import { FeedModelImpl } from "./impls/feed-model";
import { UserModelImpl } from "./impls/user-model";
import { UserModel } from "./user-model";
import { ExecuteTaskModelImpl } from "./impls/execute-task-model";


export const models = new ContainerModule((bind) => {
    bind(RssGeneratorModel).to(RssGeneratorModelImpl)
    bind(FeedModel).to(FeedModelImpl)
    bind(UserModel).to(UserModelImpl)
    bind(ExecuteTaskModel).to(ExecuteTaskModelImpl)
})