import { RssGenerator } from '@prisma/client'
export const RssGeneratorModel = Symbol('RssGeneratorModel');

export interface RssGeneratorModel {
    getGenerateRss(id: string): Promise<RssGenerator|null>;
    createGenerateRss(data: Omit<RssGenerator, 'id'>): Promise<RssGenerator>;
    putGenerateRss(data: RssGenerator): Promise<RssGenerator>;
    deleteGenerateRss(id: string): Promise<string>;
}