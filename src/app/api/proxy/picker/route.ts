import { NextRequest, NextResponse } from "next/server";
import { injectService } from "@/inversify.config";
import { WebsiteProxyService } from "@/services/website-parser/website-proxy-service";

export async function GET(req: NextRequest): Promise<NextResponse<string>> {
    const websiteProxyService = injectService<WebsiteProxyService>(WebsiteProxyService)
    const link = req.nextUrl.searchParams.get('link')
    if (!link) {
        return new NextResponse(JSON.stringify({ error: 'Missing URL' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    try {
        const cleanedHtml = await websiteProxyService.getProxyHtml(link)

        // 返回处理后的 HTML
        return new NextResponse(cleanedHtml, {
            status: 200,
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch the URL' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}