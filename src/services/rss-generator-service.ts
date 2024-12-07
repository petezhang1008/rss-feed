import { GenerateRssParams, QueryGenerateRssListParams } from "@/models/rss-generator-model";
import { Pagination } from "@/types/pagination";
import { RssGenerator } from "@prisma/client";

export const RssGeneratorService = Symbol.for('RssGeneratorService');

export interface RssGeneratorService {
    getGenerateRss(id: string): Promise<RssGenerator | null>;
    createGenerateRss(data: GenerateRssParams): Promise<RssGenerator>;
    putGenerateRss(data: RssGenerator): Promise<RssGenerator>;
    deleteGenerateRss(id: string): Promise<string>;
    queryGenerateRssList(data: QueryGenerateRssListParams): Promise<Pagination<RssGenerator[]>>;
}


