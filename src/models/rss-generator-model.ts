import { RssGeneratorFrequency, RssGeneratorType } from '@/enums/rss';
import { Pagination } from '@/types/pagination';
import { RssGenerator } from '@prisma/client'

export const RssGeneratorModel = Symbol.for('RssGeneratorModel');

export interface RssGeneratorModel {
    getGenerateRss(id: string): Promise<RssGenerator | null>;
    createGenerateRss(data: GenerateRssParams): Promise<RssGenerator>;
    putGenerateRss(data: RssGenerator): Promise<RssGenerator>;
    deleteGenerateRss(id: string): Promise<string>;
    queryGenerateRssList(data: QueryGenerateRssListParams): Promise<Pagination<RssGenerator[]>>;
}


export type GenerateRssParams = Pick<RssGenerator, 'type' | 'website'> & Partial<RssGenerator>
export interface QueryGenerateRssListParams {
    type?: RssGeneratorType,
    page: number,
    pageSize: number,
    userId?: string,
    frequency?: RssGeneratorFrequency,
    createdAt?: string,
    updatedAt?: string,
}
