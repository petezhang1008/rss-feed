import FeedItem from "@/app/components/home/feeds/feed-item";
import { FeedWithRss, Rss, RssDetail } from "@/types/model";

export default function RssFeedList({ rssDetail }: { rssDetail: RssDetail }) {
    const feeds = rssDetail.feed
    const rss: Rss = rssDetail
    return <div className="flex flex-col bg-white rounded-md shadow-sm">
        {feeds.map((feed) => (
            <FeedItem feed={{ ...feed, rss } as FeedWithRss} key={feed.id} />
        ))}
    </div>
}