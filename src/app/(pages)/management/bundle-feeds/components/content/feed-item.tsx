import { FeedWithRss } from "@/types/model";
import Link from "next/link";
import { RssItem } from "./rss-item";
import { RouterName } from "@/enums/router";
import { DateTag } from "@/app/components/common/date-tag";
import BannerImage from "@/app/components/common/banner-image";

export default function FeedItem({ feed }: { feed: FeedWithRss }) {
    return (
        <Link href={feed.link} target="_blank">
            <div className="bg-white rounded-lg p-4 flex flex-col gap-3 border border-gray-200 cursor-pointer">
                <div className="title">{feed.title}</div>
                {feed.image && <div className="w-full object-cover max-h-96 overflow-hidden">
                    <BannerImage src={feed.image} />
                </div>}
                {feed.description &&
                    <p className="text-gray-500 text-xs leading-5 line-clamp-2">{feed.description}</p>}
                <div className="flex items-center gap-2 justify-between">
                    <Link href={`${RouterName.RSS_FEEDS}/${feed?.rssId}`}
                        target="_blank"
                        className="flex items-center gap-2 text-gray-500 text-xs hover:text-secondary overflow-hidden">
                        <RssItem rss={feed?.rss} />
                    </Link>
                    <div className="overflow-hidden shrink-0">
                        <DateTag date={feed.createdAt} />
                    </div>
                </div>
            </div>
        </Link>
    )
}