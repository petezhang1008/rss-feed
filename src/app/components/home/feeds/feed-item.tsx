import { Feed } from "@prisma/client";
import Link from "next/link";
import { RouterName } from "@/enums/router";
import { RssItem } from "@/app/(pages)/management/bundle/components/content/rss-item";

export default function FeedItem({ feed }: { feed: Feed }) {
    return (

        <div className="flex p-4 gap-3 flex-none border-b border-gray-100 overflow-hidden justify-between">
            <div className="left-details flex flex-col gap-1 overflow-hidden justify-between grow">
                <div className="flex flex-col gap-1 grow">
                    <Link href={feed.link} target="_blank">
                        <h1 className="text-base font-semibold shrink-0 truncate hover:text-blue-500 hover:underline cursor-pointer ">{feed.title}</h1>
                    </Link>
                    <div className="line-clamp-2 leading-6">
                        <p className="text-sm text-gray-400">{feed.description}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 gap-3 text-xs text-gray-400 shrink-0 mt-3 justify-between">
                    <Link href={`${RouterName.FEED}/${feed?.rssId}`}
                        target="_blank"
                        className="flex items-center gap-2 text-gray-500 text-xs hover:text-blue-600">
                        <RssItem rss={feed?.rss} />
                    </Link>
                    <div className="flex items-center gap-2">
                        <span>{feed.createdAt?.toDateString()} </span>
                    </div>
                </div>
            </div>
            {feed.image &&
                <div className="right-image shrink-0 overflow-hidden w-[160px] h-[100px] object-cover center center">
                    <img src={feed.image} alt="image" width={160} height={100} referrerPolicy="no-referrer" />
                </div>}
        </div>
    )
}