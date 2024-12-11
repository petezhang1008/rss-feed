import ManagementHeader from "@/app/components/management/header/header";
import useRssDetail from "../hooks/use-rss-detail";
import useFeeds from "../hooks/use-feeds";
import FeedHeader from "../components/feed-header";
import FeedContent from "../components/content/content";

export default async function BundleDetail({ params }: { params: { bundleId: string } }) {
    const data = await params
    const bundleId = data.bundleId
    const { getBundleFeed } = useFeeds()
    const res = await getBundleFeed({
        page: 1,
        pageSize: 50,
        bundleId
    })
    const { getBundleDetail } = useRssDetail()
    const bundleDetail = await getBundleDetail(bundleId)


    return (
        <div className="flex flex-col size-full overflow-hidden" >
            <ManagementHeader>
                <FeedHeader bundleDetail={bundleDetail!} />
            </ManagementHeader>
            <div className="p-4 overflow-auto flex-1">
                <FeedContent feeds={res.result} />
            </div>
        </div>
    )
}


