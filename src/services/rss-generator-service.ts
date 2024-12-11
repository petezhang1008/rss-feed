import { GenerateRssParams, PaginationQueryGenerateRssListParams, PutGenerateRssParams, QueryGenerateRssListParams } from "@/models/rss-generator-model";
import { Pagination } from "@/types/pagination";
import { RssGenerator } from "@prisma/client";

export const RssGeneratorService = Symbol.for('RssGeneratorService');

export interface RssGeneratorService {
    getGenerateRss(id: string): Promise<RssGenerator | null>;
    createGenerateRss(data: GenerateRssParams): Promise<RssGenerator>;
    putGenerateRss(data: PutGenerateRssParams): Promise<RssGenerator>;
    deleteGenerateRss(id: string): Promise<string>;
    queryGenerateRssList(data: PaginationQueryGenerateRssListParams): Promise<Pagination<RssGenerator[]>>;
    queryAllRssList(data: QueryGenerateRssListParams): Promise<RssGenerator[]>;
}


