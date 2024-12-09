import { PrismaClient } from "@prisma/client"
import { BundleData, BundleModel, QueryBundlePaginationParams } from "../bundle-model"
import { inject, injectable } from "inversify"
import { PrismaSymbol } from "@/lib/prisma"

@injectable()
export class BundleModelImpl implements BundleModel {
    constructor(
        @inject(PrismaSymbol) private _prisma: PrismaClient
    ) { }
    async createBundle(data: BundleData) {
        return this._prisma.bundle.create({
            data
        })
    }
    async getBundles(data: QueryBundlePaginationParams) {
        const { page, pageSize, userId } = data
        const skip = (page - 1) * pageSize
        const take = pageSize
        const where = {
            userId
        }
        const bundles = await this._prisma.bundle.findMany({
            where,
            skip,
            take,
            include: {
                rssGenerators: true
            }
        })
        const total = await this._prisma.bundle.count({ where })
        return {
            page,
            pageSize,
            total,
            result: bundles
        }
    }
    async getBundleById(id: string) {
        return this._prisma.bundle.findUnique({
            where: {
                id
            }
        })
    }
    async updateBundle(id: string, data: BundleData) {
        return this._prisma.bundle.update({
            where: {
                id
            },
            data
        })
    }
    async deleteBundle(id: string) {
        return this._prisma.bundle.delete({
            where: {
                id
            }
        })
    }
}
