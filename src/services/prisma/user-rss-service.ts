import {
    CreateUserRssParams,
    PaginationUserRss,
    PaginationUserRssParams,
    QueryUserRssParams,
    UpdateUserRssParams
} from "@/models/user-rss-model";
import { UserRss, UserRssWithRssAndBundle } from "@/types/model";

export const UserRssService = Symbol.for('UserRssService');

export interface UserRssService {
    getRssDetail(id: string): Promise<UserRssWithRssAndBundle | null>;
    createUserRss(data: CreateUserRssParams): Promise<UserRssWithRssAndBundle>;
    createUserRssByRssId(params: CreateUserRssByRssIdParams): Promise<UserRssWithRssAndBundle>;
    updateUserRss(id: string, data: UpdateUserRssParams): Promise<UserRss>;
    deleteUserRss(id: string, userId: string): Promise<UserRss>;
    queryUserRssList(params: PaginationUserRssParams): Promise<PaginationUserRss>;
    queryAllRssList(params: QueryUserRssParams): Promise<UserRssWithRssAndBundle[]>;
}


export type CreateUserRssByRssIdParams = {
    rssId: string
    userId: string
}