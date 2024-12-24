import { Pagination, PaginationParams } from "@/types/pagination"
import { Bundle, BundleWithRss } from "@/types/model"

export const BundleModel = Symbol('BundleModel')

export interface BundleModel {
    createBundle: (data: BundleData) => Promise<Bundle>
    getBundles: (data: QueryBundlePaginationParams) => Promise<Pagination<BundleWithRss[]>>
    getBundlesByUserId: (userId: string) => Promise<BundleWithRss[]>
    getBundleById: (id: string) => Promise<BundleWithRss | null>
    updateBundle: (id: string, data: BundleData) => Promise<Bundle>
    deleteBundle: (id: string, userId: string) => Promise<Bundle>
}

export type BundleData = Pick<Bundle, 'title' | 'description' | 'pinned' | 'userId'>
export type QueryBundlePaginationParams = PaginationParams & {
    userId: string
}