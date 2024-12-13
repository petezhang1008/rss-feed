import { GenerateRssParams, PaginationQueryGenerateRssListParams, PutGenerateRssParams, QueryGenerateRssListParams } from "@/models/rss-generator-model";
import { Pagination } from "@/types/pagination";
import { RssGenerator } from "@prisma/client";

export const RssGeneratorService = Symbol.for('RssGeneratorService');

export interface RssGeneratorService {
    getGenerateRss(id: string): Promise<RssGenerator | null>;
    createGenerateRss(data: GenerateRssParams): Promise<RssGenerator>;
    putGenerateRss(id: string, data: GenerateRssParams): Promise<RssGenerator>;
    deleteGenerateRss(id: string, userId: string): Promise<RssGenerator>;
    queryGenerateRssList(data: PaginationQueryGenerateRssListParams): Promise<Pagination<RssGenerator[]>>;
    queryAllRssList(data: QueryGenerateRssListParams): Promise<RssGenerator[]>;
}


