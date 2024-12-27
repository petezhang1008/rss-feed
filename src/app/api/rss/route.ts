import { injectService } from "@/inversify.config";
import { NextRequest } from "next/server";
import { ResponseType } from '@/lib/http-server';
import { sendResponse } from "@/lib/http-server";
import { RssTaskService } from "@/services/task/rss-task-service";
import { Rss } from "@/types/model";
import { RssService } from "@/services/prisma/rss-service";
import { CreateRssParams } from "@/models/rss-model";

const rssTaskService = injectService<RssTaskService>(RssTaskService)
const rssService = injectService<RssService>(RssService)


export async function POST(req: NextRequest): ResponseType<Rss> {
    const data: CreateRssParams = await req.json()
    const result = await rssService?.createRss({
        ...data,
    })
    rssTaskService.consumeRssTask(result)
    return sendResponse<Rss>(result)
}
