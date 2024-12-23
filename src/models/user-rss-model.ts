import { Rss, UserRss } from "@/types/model"
import { Pagination, PaginationParams } from "@/types/pagination"

export const UserRssModel = Symbol.for('UserRssModel')

export interface UserRssModel {
    getUserRss(id: string): Promise<UserRss | null>
    queryUserRssList(params: PaginationUserRssParams): Promise<PaginationUserRss>
    queryAllRssList(params: QueryUserRssParams): Promise<UserRss[]>
    createUserRss(data: CreateUserRssParams): Promise<UserRss>
    deleteUserRss(id: string, userId: string): Promise<UserRss>
    updateUserRss(id: string, data: UpdateUserRssParams): Promise<UserRss>
}

export type UpdateUserRssParams = Partial<UserRss>
export type CreateUserRssParams = Pick<UserRss, 'userId' | 'rssId' | 'title'> & Partial<Rss>
export type PaginationUserRss = Pagination<UserRss[]>
export type PaginationUserRssParams = PaginationParams & {
    userId: string
}
export type QueryUserRssParams = Partial<UserRss> 