import { auth } from "@/auth"
import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendResponse } from "@/lib/http-server"
import { ErrorData, ResponseType } from "@/lib/http-server.interface"
import { CreateUserRssParams } from "@/models/user-rss-model"
import { RssTaskService } from "@/services/rss-task-service"
import { UserRssService } from "@/services/user-rss-service"
import { UserRss } from "@prisma/client"
import { NextRequest } from "next/server"

const userRssService = injectService<UserRssService>(UserRssService)
const rssTaskService = injectService<RssTaskService>(RssTaskService)

export async function POST(req: NextRequest): ResponseType<UserRss> {
    const data: CreateUserRssParams = await req.json()
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const result = await userRssService?.createUserRss({
        ...data,
        userId
    })
    rssTaskService.consumeRssTask(result.rss)
    return sendResponse<UserRss>(result)
}