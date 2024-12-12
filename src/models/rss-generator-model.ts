import { RssGeneratorFrequency, RssGeneratorType } from '@/enums/rss';
import { Pagination, PaginationParams } from '@/types/pagination';
import { RssGenerator } from '@prisma/client'

export const RssGeneratorModel = Symbol.for('RssGeneratorModel');

export interface RssGeneratorModel {
    getGenerateRss(id: string): Promise<RssGenerator | null>;
    createGenerateRss(data: GenerateRssParams): Promise<RssGenerator>;
    putGenerateRss(data: PutGenerateRssParams): Promise<RssGenerator>;
    deleteGenerateRss(id: string): Promise<RssGenerator>;
    queryGenerateRssList(data: PaginationQueryGenerateRssListParams): Promise<Pagination<RssGenerator[]>>;
    queryAllRssList(data: QueryGenerateRssListParams): Promise<RssGenerator[]>;
}


export type GenerateRssParams = Pick<RssGenerator, 'type' | 'website' | 'title'> & Partial<RssGenerator>
export type PutGenerateRssParams = Pick<RssGenerator, 'id'> & Partial<RssGenerator>
export type PaginationQueryGenerateRssListParams = PaginationParams & QueryGenerateRssListParams
export interface QueryGenerateRssListParams {
    type?: RssGeneratorType,
    userId?: string,
    frequency?: RssGeneratorFrequency,
    createdAt?: string,
    updatedAt?: string,
    bundleId?: string,
}
