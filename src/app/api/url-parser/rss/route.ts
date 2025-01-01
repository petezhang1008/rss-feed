import { NextRequest } from "next/server";
import { injectService } from "@/inversify.config";
import { sendResponse, ResponseType, sendError } from "@/lib/http-server";
import { ErrorCode } from "@/enums/error-code";
import { XmlParserService, RssInfo } from "@/services/website-parser/xml-parser-service";

const xmlParserService = injectService<XmlParserService>(XmlParserService)

export async function GET(req: NextRequest): ResponseType<RssInfo> {
    const data = await req.nextUrl.searchParams
    const website: string | null = data.get('website')
    if (!website) {
        return sendError(400, ErrorCode.BAD_REQUEST)
    }
    try {
        const rssInfo = await xmlParserService.getRssInfo(website)
        if (!rssInfo) {
            return sendError(400, ErrorCode.NOT_FOUND)
        }
        return sendResponse<RssInfo>(rssInfo)
    } catch (error) {
        return sendError(500, ErrorCode.INTERNAL_SERVER_ERROR)
    }
}
