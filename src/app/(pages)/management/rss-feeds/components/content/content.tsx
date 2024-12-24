import RssInfo from "./rss-info"
import { NoData } from "./no-data"
import FeedList from "./feed-list"
import { PaginationFeeds } from "@/models/feed-model"
import { UserRssWithRssAndBundle } from "@/types/model"

export default function FeedContent({ paginationFeeds, rssDetail }: { paginationFeeds: PaginationFeeds, rssDetail: UserRssWithRssAndBundle }) {
    return (
        <div className="flex gap-4 overflow-hidden w-full">
            <div className='grid-flow-dense auto-rows-auto flex flex-col gap-4 overflow-hidden w-3/5 pl-20 pr-8'>
                {
                    paginationFeeds?.result.length === 0 ? <NoData /> : <FeedList paginationFeeds={paginationFeeds} rssDetail={rssDetail} />
                }
            </div>
            <div className="flex grow">
                <RssInfo rssDetail={rssDetail} />
            </div>
        </div>
    )
}