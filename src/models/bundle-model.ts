import { Pagination, PaginationParams } from "@/types/pagination"
import { Bundle } from "@/types/model"

export const BundleModel = Symbol('BundleModel')

export interface BundleModel {
    createBundle: (data: BundleData) => Promise<Bundle>
    getBundles: (data: QueryBundlePaginationParams) => Promise<Pagination<Bundle[]>>
    getBundlesByUserId: (userId: string) => Promise<Bundle[]>
    getBundleById: (id: string) => Promise<Bundle | null>
    updateBundle: (id: string, data: BundleData) => Promise<Bundle>
    deleteBundle: (id: string, userId: string) => Promise<Bundle>
}

export type BundleData = Pick<Bundle, 'title' | 'description' | 'pinned' | 'userId'>
export type QueryBundlePaginationParams = PaginationParams & {
    userId: string
}