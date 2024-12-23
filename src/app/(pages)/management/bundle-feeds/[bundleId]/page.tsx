import ManagementHeader from "@/app/components/management/header/header";
import useRssDetail from "../hooks/server/use-rss-detail";
import useFeeds from "../hooks/server/use-feeds";
import FeedHeader from "../components/feed-header";
import FeedContent from "../components/content/content";

export default async function BundleDetail({ params }: { params: { bundleId: string } }) {
    const data = await params
    const bundleId = data.bundleId
    const { getBundleFeed } = useFeeds()
    const { getBundleDetail } = useRssDetail()
    const [res, bundleDetail] = await Promise.all([
        getBundleFeed({
            page: 1,
            pageSize: 50,
            bundleId
        }),
        getBundleDetail(bundleId)
    ])


    return (
        <div className="flex flex-col size-full overflow-hidden" >
            <ManagementHeader>
                <FeedHeader bundleDetail={bundleDetail!} />
            </ManagementHeader>
            <div className="p-4 overflow-auto flex-1">
                <FeedContent paginationFeeds={res} bundle={bundleDetail!} />
            </div>
        </div>
    )
}


