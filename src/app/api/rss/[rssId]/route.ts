import { auth } from "@/auth"
import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendJsonResponse, sendResponse } from "@/lib/http-server"
import { ErrorData } from "@/lib/http-server"
import { UserRssService } from "@/services/user-rss-service"
import { UserRss } from "@/types/model"


const userRssService = injectService<UserRssService>(UserRssService)
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    if (!id) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const session = await auth()
    if (!session?.user?.id) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const result = await userRssService?.deleteUserRss(id, session.user.id)
    return sendResponse<UserRss>(result)
}



export async function PUT(request: Request, { params }: { params: Promise<{ rssId: string }> }) {
    const { rssId } = await params
    const data = await request.json()
    const session = await auth()
    if (!session?.user?.id) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const rss = await userRssService?.updateUserRss(rssId, {
        ...data,
        userId: session?.user?.id
    })
    return sendJsonResponse(rss)
}