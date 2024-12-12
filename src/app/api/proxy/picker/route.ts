import { NextRequest, NextResponse } from "next/server";
import { injectService } from "@/inversify.config";
import { WebsiteParserService } from "@/services/website-parser-service";

interface PagePickerParam {
    link: string | null
}

export async function GET(req: NextRequest): Promise<NextResponse<string>> {
    const websiteParserService = injectService<WebsiteParserService>(WebsiteParserService)
    const params: PagePickerParam = {
        link: req.nextUrl.searchParams.get('link')
    }
    let url = params.link
    if (!url) {
        return new NextResponse(JSON.stringify({ error: 'Missing URL' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    try {
        const document = await websiteParserService.getWebsiteDocument(url)

        // 清除所有 <script> 标签
        // const scripts = document.querySelectorAll('script');
        // scripts.forEach(script => script.remove());

        // 获取处理后的 HTML
        const cleanedHtml = document.documentElement.outerHTML;

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