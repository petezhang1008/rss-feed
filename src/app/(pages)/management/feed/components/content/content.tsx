import FeedItem from "./feed-item"
import { Feed, RssGenerator } from "@prisma/client"
import RssInfo from "./rss-info"

export default function FeedContent({ feeds, rssDetail }: { feeds: Feed[], rssDetail: RssGenerator }) {
    return (
        <div className="flex gap-4 overflow-hidden w-full">
            <div className='grid-flow-dense auto-rows-auto flex flex-col gap-4 overflow-hidden w-3/5 pl-20 pr-8'>
                {
                    feeds.map(feed => {
                        return (<FeedItem feed={feed}></FeedItem>)
                    })
                }
            </div>
            <div className="flex grow">
                <RssInfo rssDetail={rssDetail} />
            </div>
        </div>
    )
}