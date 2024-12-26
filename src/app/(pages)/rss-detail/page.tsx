import Header from "@/app/components/home/header/header";
import RssDetailContent from "./components/content";
import RssDetailRightSidebar from "./components/right-sidebar";
import { useRssDetail } from "./hooks/server/use-rss-detail";

export default async function RssDetailPage({ searchParams }: { searchParams: Promise<{ rssId: string }> }) {
    const { rssId } = await searchParams

    const { getRssDetail } = useRssDetail()
    const rssDetail = await getRssDetail(rssId)
    if (!rssDetail) {
        return <div>Not found</div>
    }

    return <div className="flex flex-col size-full">
        <Header />
        <div className="flex size-full justify-center overflow-auto pt-4">
            <div className="items-top justify-center p-4">
                <div className="w-[980px] flex gap-6 overflow-hidden">
                    <RssDetailContent rssDetail={rssDetail} />
                    <RssDetailRightSidebar rssDetail={rssDetail} />
                </div>
            </div>
        </div>
    </div>
}