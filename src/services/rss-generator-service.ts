import { RssGenerator } from "@prisma/client";

export const RssGeneratorService = Symbol.for('RssGeneratorService');

export interface RssGeneratorService { 
    getGenerateRss(id: string): Promise<RssGenerator[]>;
    createGenerateRss(data: Omit<RssGenerator, 'id'>): Promise<RssGenerator>;
    putGenerateRss(data: RssGenerator): Promise<RssGenerator>;
    deleteGenerateRss(id: string): Promise<string>;
}

