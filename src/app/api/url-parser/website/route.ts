import { NextRequest } from "next/server";
import { injectService } from "@/inversify.config";
import { sendResponse, ResponseType, sendError } from "@/lib/http-server";
import { ErrorCode } from "@/enums/error-code";
import { HtmlParserService, WebsiteInfo } from "@/services/website-parser/html-parser-service";

const htmlParserService = injectService<HtmlParserService>(HtmlParserService)

export async function GET(req: NextRequest): ResponseType<WebsiteInfo> {
    const data = await req.nextUrl.searchParams
    const website: string | null = data.get('website')
    if (!website) {
        return sendError(400, ErrorCode.BAD_REQUEST)
    }
    try {
        const websiteInfo = await htmlParserService.getWebsiteInfo(website)
        if (!websiteInfo) {
            return sendError(400, ErrorCode.NOT_FOUND)
        }
        return sendResponse<WebsiteInfo>(websiteInfo)
    } catch (error) {
        return sendError(500, ErrorCode.INTERNAL_SERVER_ERROR, { error: error })
    }
}