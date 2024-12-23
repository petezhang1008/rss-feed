import {
    CreateUserRssParams,
    PaginationUserRss,
    PaginationUserRssParams,
    QueryUserRssParams,
    UpdateUserRssParams
} from "@/models/user-rss-model";
import { UserRss } from "@/types/model";

export const UserRssService = Symbol.for('UserRssService');

export interface UserRssService {
    createUserRss(data: CreateUserRssParams): Promise<UserRss>;
    updateUserRss(id: string, data: UpdateUserRssParams): Promise<UserRss>;
    deleteUserRss(id: string, userId: string): Promise<UserRss>;
    queryUserRssList(params: PaginationUserRssParams): Promise<PaginationUserRss>;
    queryAllRssList(params: QueryUserRssParams): Promise<UserRss[]>;
}
