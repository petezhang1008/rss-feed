import { auth } from "@/auth"
import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendJsonResponse, sendResponse } from "@/lib/http-server"
import { ErrorData } from "@/lib/http-server.interface"
import { RssGeneratorService } from "@/services/rss-generator-service"
import { RssGenerator } from "@prisma/client"


const rssGeneratorService = injectService<RssGeneratorService>(RssGeneratorService)
export async function DELETE(request: Request, { params }: { params: { rssId: string } }) {
    const { rssId } = await params
    if (!rssId) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const session = await auth()
    if (!session?.user?.id) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const result = await rssGeneratorService?.deleteGenerateRss(rssId, session.user.id)
    return sendResponse<RssGenerator>(result)
}



export async function PUT(request: Request, { params }: { params: { rssId: string } }) {
    const { rssId } = await params
    const data = await request.json()
    const session = await auth()
    if (!session?.user?.id) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const rss = await rssGeneratorService?.putGenerateRss(rssId, {
        ...data,
        userId: session?.user?.id
    })
    return sendJsonResponse(rss)
}