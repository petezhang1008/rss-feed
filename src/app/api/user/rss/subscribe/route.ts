import { auth } from "@/auth"
import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendJsonResponse } from "@/lib/http-server"
import { ErrorData } from "@/lib/http-server"
import { UserRssService } from "@/services/prisma/user-rss-service"

const userRssService = injectService<UserRssService>(UserRssService)
export async function POST(request: Request) {
    const data = await request.json()
    const { rssId } = data
    const session = await auth()
    if (!session?.user?.id) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const rss = await userRssService.createUserRssByRssId({
        rssId,
        userId: session?.user?.id
    })
    return sendJsonResponse(rss)
}