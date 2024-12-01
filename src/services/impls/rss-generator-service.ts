import { injectable } from "inversify";
import { RssGeneratorService } from "../rss-generator-service";
import { RssGenerator } from "@prisma/client";

@injectable()
export class RssGeneratorServiceImpl implements RssGeneratorService{
    constructor() {
    }
    getGenerateRss(id: string){
        return {} as unknown;
    }
    createGenerateRss(data: Omit<RssGenerator, 'id'>){
        return {} as unknown;
    }
    putGenerateRss(data: RssGenerator){
        return {} as unknown;
    }
    deleteGenerateRss(id: string){
        return {} as unknown;
    }
}