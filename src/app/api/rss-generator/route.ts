import { injectService } from "@/inversify.config";
import { RssGeneratorService } from "@/services/rss-generator-service";
import { RssGenerator } from "@prisma/client";
import { NextRequest } from "next/server";
import { ErrorData, HttpServer, ResponseType } from '@/lib/http-server.interface';
import { ErrorCode } from '@/enums/error-code';
import { GenerateRssParams } from '@/models/rss-generator-model';
import { sendError, sendResponse } from "@/lib/http-server";

// const httpServer = injectService<HttpServer>(HttpServer)
const rssGeneratorService = injectService<RssGeneratorService>(RssGeneratorService);

export async function GET(req: NextRequest): ResponseType<RssGenerator> {
    const userId: string | null = req.nextUrl.searchParams.get('useId')
    if (!userId) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const result = await rssGeneratorService?.getGenerateRss(userId)
    if (!result) {
        return sendError<ErrorData>(404, ErrorCode.NOT_FOUND)
    }
    return sendResponse<RssGenerator>(result)
}



export async function POST(req: NextRequest): ResponseType<RssGenerator> {
    const data: GenerateRssParams = await req.json()
    const userId = data.userId
    if (!userId) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const result = await rssGeneratorService?.createGenerateRss(data)
    return sendResponse<RssGenerator>(result)
}