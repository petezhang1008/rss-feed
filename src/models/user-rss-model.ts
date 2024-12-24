import { Rss, UserRss, UserRssWithRssAndBundle } from "@/types/model"
import { Pagination, PaginationParams } from "@/types/pagination"

export const UserRssModel = Symbol.for('UserRssModel')

export interface UserRssModel {
    getUserRss(id: string): Promise<UserRssWithRssAndBundle | null>
    queryUserRssList(params: PaginationUserRssParams): Promise<PaginationUserRss>
    queryAllRssList(params: QueryUserRssParams): Promise<UserRssWithRssAndBundle[]>
    createUserRss(data: CreateUserRssParams): Promise<UserRssWithRssAndBundle>
    deleteUserRss(id: string, userId: string): Promise<UserRss>
    updateUserRss(id: string, data: UpdateUserRssParams): Promise<UserRss>
}

export type UpdateUserRssParams = Partial<UserRss>
export type CreateUserRssParams = Pick<UserRss, 'userId' | 'rssId' | 'title'> & Partial<Rss>
export type PaginationUserRss = Pagination<UserRssWithRssAndBundle[]>
export type PaginationUserRssParams = PaginationParams & {
    userId: string
}
export type QueryUserRssParams = Partial<UserRss> 