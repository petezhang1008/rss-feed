import { RssGeneratorFrequency, RssGeneratorType } from '@/enums/rss';
import { Rss } from '@/types/model';
import { Pagination, PaginationParams } from '@/types/pagination';

export const RssModel = Symbol.for('RssModel');

export interface RssModel {
    getRss(id: string): Promise<Rss | null>;
    createRss(data: CreateRssParams): Promise<Rss>;
    getRssByTypeWebsiteSelector(data: GetRssByTypeWebsiteSelectorParams): Promise<Rss | null>;
    updateRss(id: string, data: UpdateRssParams): Promise<Rss>;
    queryRssList(data: PaginationRssListParams): Promise<Pagination<Rss[]>>;
}


export type CreateRssParams = Pick<Rss, 'type' | 'website' | 'title'> & Partial<Rss>
export type UpdateRssParams = Partial<Rss>
export type GetRssByTypeWebsiteSelectorParams = Pick<Rss, 'type' | 'website' | 'selector'>
export interface PaginationRssListParams extends PaginationParams {
    type?: RssGeneratorType,
    frequency?: RssGeneratorFrequency,
    createdAt?: string,
    updatedAt?: string,
}