import { injectable } from "inversify";
import { RssGeneratorModel } from "../rss-generator-model";
import { RssGenerator } from "@prisma/client";


@injectable()
export class RssGeneratorModelImpl implements RssGeneratorModel{
    constructor() {
        
    }
    getGenerateRss(id: string){
        
    }
    createGenerateRss(data: Omit<RssGenerator, 'id'>){
        
    }
    putGenerateRss(data: RssGenerator){
        
    }
    deleteGenerateRss(id: string){
        
    }
}