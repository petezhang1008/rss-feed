import { BundleData, QueryBundlePaginationParams } from "@/models/bundle-model"
import { Pagination } from "@/types/pagination"
import { Bundle } from "@prisma/client"

export const BundleService = Symbol('BundleService')
export interface BundleService {
    createBundle: (data: BundleData) => Promise<Bundle>
    getBundles: (data: QueryBundlePaginationParams) => Promise<Pagination<Bundle[]>>
    getBundlesByUserId: (userId: string) => Promise<Bundle[]>
    getBundleById: (id: string) => Promise<Bundle | null>
    updateBundle: (id: string, data: BundleData) => Promise<Bundle>
    deleteBundle: (id: string) => Promise<Bundle>
}