import { RssGenerator } from "@prisma/client"
import Link from "next/link"

export default function FeedHeader({ rssDetail }: { rssDetail: RssGenerator }) {

    if (!rssDetail) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex items-center gap-3">
            <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-10 rounded-lg">
                    <span className="text-xs">{rssDetail?.title?.slice(0, 2)}</span>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <p className="text-gray-700 font-bold">{rssDetail?.title}</p>
                    <div className="badge badge-primary badge-outline text-xs">{rssDetail.frequency}</div>
                </div>
                {rssDetail?.website && <Link className="text-gray-500 text-xs hover:text-blue-700 cursor-pointer" href={rssDetail?.website}>{rssDetail?.website}</Link>}
            </div>
        </div>
    )
}