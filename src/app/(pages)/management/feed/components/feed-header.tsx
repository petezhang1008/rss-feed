import { RssGenerator } from "@prisma/client"
import Link from "next/link"
import Image from "next/image"
import LogoImage from "@/app/components/common/logo-image"

export default function FeedHeader({ rssDetail }: { rssDetail: RssGenerator }) {

    if (!rssDetail) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex items-center gap-3">
            <div className="avatar placeholder">
                <div className="size-10">
                    <LogoImage src={rssDetail?.image} title={rssDetail?.title!} width={40} height={40} />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <p className="text-gray-700 font-bold">{rssDetail?.title}</p>
                    <div className="badge badge-primary badge-outline text-xs">{rssDetail.frequency}</div>
                </div>
                {rssDetail?.link && <Link className="text-gray-500 text-xs hover:text-blue-700 cursor-pointer" href={rssDetail?.link}>{rssDetail?.link}</Link>}
            </div>
        </div>
    )
}