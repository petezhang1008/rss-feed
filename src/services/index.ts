import { ContainerModule } from "inversify";
import { RssGeneratorService } from "./rss-generator-service";
import { RssGeneratorServiceImpl } from "./impls/rss-generator-service";


export const services = new ContainerModule((bind) => { 
    bind(RssGeneratorService).to(RssGeneratorServiceImpl)
})