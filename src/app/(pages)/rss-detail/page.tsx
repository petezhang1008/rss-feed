import RssDetailContent from "./components/content";
import RssDetailRightSidebar from "./components/right-sidebar";
import { useRssDetail } from "./hooks/server/use-rss-detail";
import HomeRoot from "@/app/components/root/home-root";

export default async function RssDetailPage({ searchParams }: { searchParams: Promise<{ rssId: string }> }) {
    const { rssId } = await searchParams

    const { getRssDetail } = useRssDetail()
    const rssDetail = await getRssDetail(rssId)
    if (!rssDetail) {
        return <div>Not found</div>
    }

    return (
        <HomeRoot>
            <div className="flex size-full justify-center overflow-auto">
                <div className="items-top justify-center p-4">
                    <div className="w-[980px] flex gap-6 overflow-hidden">
                        <RssDetailContent rssDetail={rssDetail} />
                        <RssDetailRightSidebar rssDetail={rssDetail} />
                    </div>
                </div>
            </div>
        </HomeRoot>
    )
}