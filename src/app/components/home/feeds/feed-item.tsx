'use client'
import { Feed } from "@/types/model";
import Link from "next/link";
import { RssItem } from "@/app/(pages)/management/bundle-feeds/components/content/rss-item";
import { DateTag } from "../../common/date-tag";
import BannerImage from "../../common/banner-image";
import { useEventStop } from "@/app/hooks/use-event-stop";

export default function FeedItem({ feed }: { feed: Feed }) {
    const { stopEvent } = useEventStop()
    return (
        <Link href={feed.link} target="_blank">
            <div className="flex p-4 gap-3 flex-none border-b border-gray-100 overflow-hidden justify-between hover:bg-gray-100 cursor-pointer">
                <div className="left-details flex flex-col gap-1 overflow-hidden justify-between grow">
                    <div className="flex flex-col gap-1 grow">
                        <h1 className="text-base font-semibold shrink-0 truncate cursor-pointer ">{feed.title}</h1>
                        <div className="line-clamp-2 leading-6">
                            <p className="text-sm text-gray-400">{feed.description}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 gap-3 text-xs text-gray-400 shrink-0 mt-3 justify-between">
                        <div className="flex items-center gap-2 hover:text-blue-600" onClick={stopEvent}>
                            <RssItem rss={feed?.rss} />
                        </div>
                        <div>
                            <DateTag date={feed.createdAt} />
                        </div>
                    </div>
                </div>
                {feed.image && <div className="right-image shrink-0 overflow-hidden w-[160px] max-h-[100px] object-cover center center">
                    <BannerImage src={feed.image} />
                </div>}
            </div>
        </Link>
    )
}