import { RssGenerator } from '@prisma/client'
export const RssGeneratorModel = Symbol('RssGeneratorModel');

export interface RssGeneratorModel {
    getGenerateRss(id: string): Promise<RssGenerator|null>;
    createGenerateRss(data: CreateGenerateRssParams): Promise<RssGenerator>;
    putGenerateRss(data: RssGenerator): Promise<RssGenerator>;
    deleteGenerateRss(id: string): Promise<string>;
}


export type CreateGenerateRssParams = Omit<RssGenerator, 'id'>