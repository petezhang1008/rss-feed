import { inject, injectable } from "inversify";
import { CreateGenerateRssParams, RssGeneratorModel } from "../rss-generator-model";
import { PrismaClient, RssGenerator } from "@prisma/client";
import { Prisma } from "@/lib/prisma";


@injectable()
export class RssGeneratorModelImpl implements RssGeneratorModel{
    constructor(
        @inject(Prisma) private _prisma: PrismaClient
    ) { }
    async getGenerateRss(id: string){
        const result = await this._prisma.rssGenerator.findUnique({
            where: {id}
        })
        return result
    }
    async createGenerateRss(data: CreateGenerateRssParams){
        const result = await this._prisma.rssGenerator.create({
            data
        })
        return result
    }
    async putGenerateRss(data: RssGenerator){
        const result = await this._prisma.rssGenerator.update({
            where: {id: data.id},
            data
        })
        return result
    }
    async deleteGenerateRss(id: string){
        const result = await this._prisma.rssGenerator.delete({
            where: {id}
        })
        return result.id
    }
}