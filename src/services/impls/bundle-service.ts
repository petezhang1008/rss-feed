import { BundleData, BundleModel, QueryBundlePaginationParams } from "@/models/bundle-model"
import { Pagination } from "@/types/pagination"
import { Bundle } from "@prisma/client"
import { injectable, inject } from "inversify"
import { BundleService } from "../bundle-service"

@injectable()
export class BundleServiceImpl implements BundleService {
    constructor(
        @inject(BundleModel)
        private _bundleModel: BundleModel
    ) { }
    createBundle(data: BundleData) {
        return this._bundleModel.createBundle(data)
    }
    getBundles(data: QueryBundlePaginationParams) {
        return this._bundleModel.getBundles(data)
    }
    getBundleById(id: string) {
        return this._bundleModel.getBundleById(id)
    }
    updateBundle(id: string, data: BundleData) {
        return this._bundleModel.updateBundle(id, data)
    }
    deleteBundle(id: string) {
        return this._bundleModel.deleteBundle(id)
    }
}