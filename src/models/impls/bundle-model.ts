import { PrismaClient } from "@prisma/client"
import { BundleData, BundleModel, QueryBundlePaginationParams } from "../bundle-model"
import { inject, injectable } from "inversify"
import { PrismaSymbol } from "@/lib/prisma"

@injectable()
export class BundleModelImpl implements BundleModel {
    constructor(
        @inject(PrismaSymbol)
        private _prisma: PrismaClient
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
                userRss: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        const total = await this._prisma.bundle.count({ where })
        return {
            page,
            pageSize,
            total,
            result: bundles,
        }
    }
    async getBundlesByUserId(userId: string) {
        return this._prisma.bundle.findMany({
            where: {
                userId
            },
            include: {
                userRss: true
            }
        })
    }
    async getBundleById(id: string) {
        return this._prisma.bundle.findUnique({
            where: {
                id
            },
            include: {
                userRss: true
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
    async deleteBundle(id: string, userId: string) {
        return this._prisma.bundle.delete({
            where: {
                id,
                userId
            }
        })
    }
}
