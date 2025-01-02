import useRssDetail from "../hooks/server/use-rss-detail";
import useFeeds from "../hooks/server/use-feeds";
import FeedHeader from "../components/feed-header";
import FeedContent from "../components/content/content";
import ManagementRoot from "@/app/components/root/management-root";

export default async function BundleDetail({ params }: { params: Promise<{ bundleId: string }> }) {
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
        <ManagementRoot header={
            <FeedHeader bundleDetail={bundleDetail!} />
        }>
            <FeedContent paginationFeeds={res} bundle={bundleDetail!} />
        </ManagementRoot>
    )
}


