import FeedHeader from "../components/feed-header";
import FeedContent from "../components/content/content";
import useFeeds from "../hooks/server/use-feeds";
import useRssDetail from "../hooks/server/use-rss-detail";
import ManagementRoot from "@/app/components/root/management-root";

export default async function Feed({
    params
}: {
    params: Promise<{ userRssId: string }>,
}) {
    const data = await params
    const userRssId = data.userRssId
    const { getFeed } = useFeeds()
    const { getRssDetail } = useRssDetail()
    const rssDetail = await getRssDetail(userRssId)
    const res = await getFeed({
        page: 1,
        pageSize: 50,
        rssId: rssDetail?.rssId || ""
    })

    return (
        <ManagementRoot header={
            <div className="flex items-center justify-between">
                <FeedHeader rssDetail={rssDetail!} />
            </div>
        }>
            <FeedContent paginationFeeds={res} rssDetail={rssDetail!} />
        </ManagementRoot>
    )
}


