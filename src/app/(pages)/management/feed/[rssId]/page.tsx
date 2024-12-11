import ManagementHeader from "@/app/components/management/header/header";
import FeedHeader from "../components/feed-header";
import FeedContent from "../components/content/content";
import useFeeds from "../hooks/use-feeds";
import useRssDetail from "../hooks/use-rss-detail";

export default async function Feed({ params }: { params: { rssId: string } }) {
    const data = await params
    const rssId = data.rssId
    const getFeeds = useFeeds()
    const res = await getFeeds.
        getFeed({
            page: 1,
            pageSize: 50,
            rssId
        })
    const getRssDetail = useRssDetail()
    const rssDetail = await getRssDetail.getRssDetail(rssId)


    return (
        <div className="flex flex-col size-full overflow-hidden">
            <ManagementHeader>
                <FeedHeader rssDetail={rssDetail!} />
            </ManagementHeader>
            <div className="p-4 overflow-auto flex-1">
                <FeedContent feeds={res.result} />
            </div>
        </div>
    )
}


