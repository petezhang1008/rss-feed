import { auth } from "@/auth"
import { injectService } from "@/inversify.config"
import { sendResponse } from "@/lib/http-server"
import { PutGenerateRssParams } from "@/models/rss-generator-model"
import { RssGeneratorService } from "@/services/rss-generator-service"
import { RssGenerator } from "@prisma/client"
import { NextRequest } from "next/server"
import { ResponseType } from '@/lib/http-server.interface';

const rssGeneratorService = injectService<RssGeneratorService>(RssGeneratorService)

export async function PUT(req: NextRequest): ResponseType<RssGenerator> {
    const data: PutGenerateRssParams = await req.json()
    const session = await auth()
    const result = await rssGeneratorService.putGenerateRss({
        ...data,
        userId: session?.user?.id!
    })
    return sendResponse<RssGenerator>(result)
}