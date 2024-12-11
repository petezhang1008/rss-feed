import Image from "next/image";
import { Feed } from "@prisma/client";
import Link from "next/link";

export default function FeedItem({ feed }: { feed: Feed }) {
    return (
        <Link href={feed.link} target="_blank">
            <div className="flex p-4 gap-3 flex-none hover:bg-gray-100 cursor-pointer border-b border-gray-100 overflow-hidden">
                <div className="left-details flex flex-col gap-1 overflow-hidden">
                    <h1 className="text-base font-semibold shrink-0 truncate">{feed.title}</h1>
                    <div className="line-clamp-2 leading-6">
                        <p className="text-sm text-gray-400 ">{feed.description}</p>
                    </div>
                    <div className="flex items-center gap-2 gap-3 text-xs text-gray-400 shrink-0 mt-3 justify-between">
                        <div className="flex items-center gap-2">
                            <div className="badge badge-blue text-gray-500 p-2">{feed.domain}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>{feed.author}</span>
                            <span>{feed.pubDate?.toDateString()} </span>
                        </div>
                    </div>
                </div>
                {feed.image && <div className="right-image">
                    <Image src={feed.image} alt="feed-item" width={100} height={100} />
                </div>}
            </div>
        </Link>
    )
}