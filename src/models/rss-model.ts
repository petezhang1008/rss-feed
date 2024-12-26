import { RssGeneratorFrequency, RssGeneratorType } from '@/enums/rss';
import { Rss, RssDetail } from '@/types/model';
import { Pagination, PaginationParams } from '@/types/pagination';

export const RssModel = Symbol.for('RssModel');

export interface RssModel {
    getRss(id: string): Promise<Rss | null>;
    getRssDetail(id: string): Promise<RssDetail | null>;
    createRss(data: CreateRssParams): Promise<Rss>;
    getRssByTypeWebsiteSelector(data: GetRssByTypeWebsiteSelectorParams): Promise<Rss | null>;
    updateRss(id: string, data: UpdateRssParams): Promise<Rss>;
    queryRssList(data: PaginationRssListParams): Promise<Pagination<Rss[]>>;
    queryAllRssList(data: QueryRssListParams): Promise<Rss[]>;
    getFavoriteRssList(count: number): Promise<Rss[]>;
}


export type CreateRssParams = Pick<Rss, 'type' | 'website' | 'title'> & Partial<Rss>
export type UpdateRssParams = Partial<Rss>
export type GetRssByTypeWebsiteSelectorParams = Pick<Rss, 'type' | 'website' | 'selector'>
export type QueryRssListParams = {
    type?: RssGeneratorType,
    frequency?: RssGeneratorFrequency,
    createdAt?: string,
    updatedAt?: string,
    official?: boolean
}
export type PaginationRssListParams = PaginationParams & QueryRssListParams