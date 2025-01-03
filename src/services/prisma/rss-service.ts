import { GetRssByTypeWebsiteSelectorParams, PaginationRssListParams, QueryRssListParams, UpdateRssParams } from "@/models/rss-model";
import { Rss, RssDetail } from "@/types/model";
import { Pagination } from "@/types/pagination";

export const RssService = Symbol.for('RssService');

export interface RssService {
    getRss(id: string): Promise<Rss | null>;
    getRssDetail(id: string): Promise<RssDetail | null>;
    createRss(data: ServiceCreateRssParams): Promise<Rss>;
    getRssByTypeWebsiteSelector(data: GetRssByTypeWebsiteSelectorParams): Promise<Rss | null>;
    updateRss(id: string, data: UpdateRssParams): Promise<Rss>;
    queryRssList(data: PaginationRssListParams): Promise<Pagination<Rss[]>>;
    queryAllRssList(data: QueryRssListParams): Promise<Rss[]>;
    getFavoriteRssList(count: number): Promise<Rss[]>;
}



export interface ServiceCreateRssParams {
    type: string,
    website: string,
    selector?: string | null
}