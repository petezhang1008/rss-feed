import { injectService } from "@/inversify.config";
import { RssGeneratorService } from "@/services/rss-generator-service";
import { RssGenerator } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest): Promise<NextResponse<RssGenerator | null>>  {
    const rssGeneratorService = injectService<RssGeneratorService>(RssGeneratorService);
    const userId: string|null = req.nextUrl.searchParams.get('useId')
    if (!userId) { 
        return new NextResponse(JSON.stringify({ error: 'Missing userId' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    const result = await rssGeneratorService?.getGenerateRss(userId)

    return new NextResponse(result, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
}