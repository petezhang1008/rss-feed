import { RssDetail } from "@/types/model";
import RssDetailHeader from "./rss-detail-header";
import RssFeedList from "./rss-feed-list";
import MoreData from "./more-data";

export default function RssDetailContent({ rssDetail }: { rssDetail: RssDetail }) {
    return <div className="flex flex-col gap-4 overflow-hidden mb-8">
        <RssDetailHeader rssDetail={rssDetail} />
        <RssFeedList rssDetail={rssDetail} />
        <MoreData />
    </div>
}