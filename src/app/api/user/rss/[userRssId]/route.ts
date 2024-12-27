import { auth } from "@/auth"
import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendResponse } from "@/lib/http-server"
import { ErrorData } from "@/lib/http-server"
import { UserRssService } from "@/services/user-rss-service"
import { UserRss } from "@prisma/client"
import { NextRequest } from "next/server"
import { ResponseType } from "@/lib/http-server"

const userRssService = injectService<UserRssService>(UserRssService)
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ userRssId: string }> }): ResponseType<UserRss> {
    const { userRssId } = await params
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const result = await userRssService?.deleteUserRss(userRssId, userId)
    return sendResponse<UserRss>(result)
}