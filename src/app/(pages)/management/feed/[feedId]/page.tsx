import ManagementHeader from "@/app/components/management/header/header";
import FeedHeader from "../components/feed-header";
import FeedContent from "../components/content/content";
import useFeeds from "../hooks/use-feeds";
import useRssDetail from "../hooks/use-rss-detail";

export default async function Feed({ params }: { params: { feedId: string } }) {
    const data = await params
    const feedId = data.feedId
    const getFeeds = useFeeds()
    const res = await getFeeds.
    getFeed({
        page: 1,
        pageSize: 50,
        feedId
    })
    const getRssDetail = useRssDetail()
    const rssDetail = await getRssDetail.getRssDetail(feedId)


    return (
        <div className="flex flex-col size-full">
            <ManagementHeader>
                <FeedHeader rssDetail={rssDetail!} />
            </ManagementHeader>
            <div className="p-4 gap-4 flex flex-col">
                <FeedContent feeds={res.result} />
            </div>
        </div>
    )
}


