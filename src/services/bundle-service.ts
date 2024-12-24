import { BundleData, QueryBundlePaginationParams } from "@/models/bundle-model"
import { Pagination } from "@/types/pagination"
import { Bundle, BundleWithRss } from "@/types/model"

export const BundleService = Symbol('BundleService')
export interface BundleService {
    createBundle: (data: BundleData) => Promise<Bundle>
    getBundles: (data: QueryBundlePaginationParams) => Promise<Pagination<BundleWithRss[]>>
    getBundlesByUserId: (userId: string) => Promise<BundleWithRss[]>
    getBundleById: (id: string) => Promise<BundleWithRss | null>
    updateBundle: (id: string, data: BundleData) => Promise<Bundle>
    deleteBundle: (id: string, userId: string) => Promise<Bundle>
}