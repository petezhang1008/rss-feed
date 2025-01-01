import { NextRequest } from "next/server";
import { injectService } from "@/inversify.config";
import { sendResponse, ResponseType, sendError } from "@/lib/http-server";
import { RssGeneratorFrequency } from "@/enums/rss";
import { RssService } from "@/services/prisma/rss-service";
import _ from "lodash";
import { ErrorCode } from "@/enums/error-code";
import { RssMQProducer } from "@/services/rabbit-mq/rss-mq-producer";

type TaskSuccess = {
    message: string
}
const rssGeneratorService = injectService<RssService>(RssService)
const rssMQProducer = injectService<RssMQProducer>(RssMQProducer)

export async function GET(req: NextRequest): ResponseType<TaskSuccess> {
    const type = req.nextUrl.searchParams.get('type')
    console.log('===start Hourly task===| type: ', type)

    const pageSize = 100
    let page = 1
    if (!_.includes([RssGeneratorFrequency.HOUR, RssGeneratorFrequency.DAY], type)) {
        return sendError(400, ErrorCode.INVALID_PARAMS)
    }
    async function initRssQueue() {
        const rssGeneratorList = await rssGeneratorService.queryRssList({
            page: 1,
            pageSize: 100,
            frequency: type as RssGeneratorFrequency
        })
        if (rssGeneratorList.total > page * pageSize) {
            page++
            await initRssQueue()
        }
        await rssMQProducer.sendMessage(rssGeneratorList.result)
    }
    await initRssQueue()

    return sendResponse<TaskSuccess>({
        message: 'success'
    });
}