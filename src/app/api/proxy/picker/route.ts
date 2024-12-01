import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

interface PagePickerParam{
    link: string|null
}

export async function GET(req: NextRequest): Promise<NextResponse<string>> {
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
        url = decodeURIComponent(url)
        // 获取网页内容
        const response = await fetch(url);
        const text = await response.text();

        // 使用 JSDOM 解析 HTML
        const dom = new JSDOM(text);
        const document = dom.window.document;

        // 清除所有 <script> 标签
        const scripts = document.querySelectorAll('script');
        scripts.forEach(script => script.remove());

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