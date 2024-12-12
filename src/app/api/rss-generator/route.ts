import { injectService } from "@/inversify.config";
import { RssGeneratorService } from "@/services/rss-generator-service";
import { RssGenerator } from "@prisma/client";
import { NextRequest } from "next/server";
import { ErrorData, ResponseType } from '@/lib/http-server.interface';
import { ErrorCode } from '@/enums/error-code';
import { GenerateRssParams } from '@/models/rss-generator-model';
import { sendError, sendResponse } from "@/lib/http-server";
import { auth } from "@/auth";
import { RssTaskService } from "@/services/rss-task-service";

// const httpServer = injectService<HttpServer>(HttpServer)
const rssGeneratorService = injectService<RssGeneratorService>(RssGeneratorService);
const rssTaskService = injectService<RssTaskService>(RssTaskService)

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
    const session = await auth()
    const result = await rssGeneratorService?.createGenerateRss({
        ...data,
        userId: session?.user?.id
    })
    rssTaskService.consumeRssTask(result)
    return sendResponse<RssGenerator>(result)
}

export async function DELETE(req: NextRequest): ResponseType<RssGenerator> {
    const id: string | null = req.nextUrl.searchParams.get('id')
    if (!id) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const result = await rssGeneratorService?.deleteGenerateRss(id)
    return sendResponse<RssGenerator>(result)
}