import { CreateGenerateRssParams } from "@/models/rss-generator-model";
import { RssGenerator } from "@prisma/client";

export const RssGeneratorService = Symbol.for('RssGeneratorService');

export interface RssGeneratorService { 
    getGenerateRss(id: string): Promise<RssGenerator|null>;
    createGenerateRss(data: CreateGenerateRssParams): Promise<RssGenerator>;
    putGenerateRss(data: RssGenerator): Promise<RssGenerator>;
    deleteGenerateRss(id: string): Promise<string>;
}


