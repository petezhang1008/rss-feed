import BannerImage from "@/app/components/common/banner-image";
import { Feed } from "@prisma/client";
import Link from "next/link";

export default function FeedItem({ feed }: { feed: Feed }) {
    return (
        <Link href={feed.link} target="_blank">
            <div className="bg-white rounded-lg p-4 flex flex-col gap-3 border border-gray-200 cursor-pointer">
                <div className="title font-semibold line-clamp-2">{feed.title}</div>
                {feed.image && <div className="w-full object-cover max-h-96 overflow-hidden">
                    <BannerImage src={feed.image} />
                </div>}
                {feed.description && <div>
                    <p className="text-gray-500 text-xs leading-5">{feed.description}</p>
                </div>}
                <div className="flex items-center gap-2 justify-between">
                    <div className="badge badge-blue text-gray-500 p-2">{feed.domain}</div>
                    <div className="text-gray-400 p-2 text-xs">{feed.pubDate?.toDateString()}</div>
                </div>
            </div>
        </Link>
    )
}