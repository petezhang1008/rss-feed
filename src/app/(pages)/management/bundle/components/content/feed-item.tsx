import { Feed } from "@prisma/client";
import Link from "next/link";
import { RssItem } from "./rss-item";
import { RouterName } from "@/enums/router";

export default function FeedItem({ feed }: { feed: Feed }) {
    return (
        <Link href={feed.link} target="_blank">
            <div className="bg-white rounded-lg p-4 flex flex-col gap-3 border border-gray-200 cursor-pointer">
                <div className="title">{feed.title}</div>
                {feed.image && <div>
                    <img className="w-full object-cover max-h-96" src={feed.image} alt="img" referrerPolicy="no-referrer" />
                </div>}
                {feed.description &&
                    <p className="text-gray-500 text-xs leading-5 line-clamp-2">{feed.description}</p>}
                <div className="flex items-center gap-2 justify-between">
                    <Link href={`${RouterName.FEED}/${feed?.rssId}`}
                        target="_blank"
                        className="flex items-center gap-2 text-gray-500 text-xs hover:text-blue-600">
                        <RssItem rss={feed?.rss} />
                    </Link>
                    <div className="text-gray-400 p-2 text-xs">{feed.createdAt?.toDateString()}</div>
                </div>
            </div>
        </Link>
    )
}