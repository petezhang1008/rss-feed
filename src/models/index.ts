import { ContainerModule } from "inversify";
import { RssGeneratorModel } from "./rss-generator-model";
import { RssGeneratorModelImpl } from "./impls/rss-generator-model";


export const models = new ContainerModule((bind) => { 
    bind(RssGeneratorModel).to(RssGeneratorModelImpl)
})