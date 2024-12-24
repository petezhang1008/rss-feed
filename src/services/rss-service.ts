import { CreateRssParams, GetRssByTypeWebsiteSelectorParams, PaginationRssListParams, QueryRssListParams, UpdateRssParams } from "@/models/rss-model";
import { Rss } from "@/types/model";
import { Pagination } from "@/types/pagination";

export const RssService = Symbol.for('RssService');

export interface RssService {
    getRss(id: string): Promise<Rss | null>;
    createRss(data: CreateRssParams): Promise<Rss>;
    getRssByTypeWebsiteSelector(data: GetRssByTypeWebsiteSelectorParams): Promise<Rss | null>;
    updateRss(id: string, data: UpdateRssParams): Promise<Rss>;
    queryRssList(data: PaginationRssListParams): Promise<Pagination<Rss[]>>;
    queryAllRssList(data: QueryRssListParams): Promise<Rss[]>;
}


