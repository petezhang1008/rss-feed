import ManagementHeader from "@/app/components/management/header/header";
import FeedHeader from "../components/feed-header";
import FeedContent from "../components/content/content";
import useFeeds from "../hooks/server/use-feeds";
import useRssDetail from "../hooks/server/use-rss-detail";

export default async function Feed({
    params,
    searchParams
}: {
    params: Promise<{ userRssId: string }>,
    searchParams: Promise<{ taskId?: string }>
}) {
    const data = await params
    const { taskId } = await searchParams
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
        <div className="flex flex-col size-full overflow-hidden">
            <ManagementHeader>
                <FeedHeader rssDetail={rssDetail!} />
            </ManagementHeader>
            <div className="p-4 overflow-auto flex-1">
                <FeedContent paginationFeeds={res} rssDetail={rssDetail!} taskId={taskId} />
            </div>
        </div>
    )
}


