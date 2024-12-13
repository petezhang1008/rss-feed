import { RssGenerator } from "@prisma/client"
import Link from "next/link"
import LogoImage from "@/app/components/common/logo-image"
import { ChevronLeftIcon } from "@radix-ui/react-icons"
import { RouterName } from "@/enums/router"

export default function FeedHeader({ rssDetail }: { rssDetail: RssGenerator }) {

    if (!rssDetail) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex items-center gap-3">
            <Link href={RouterName.MY_FEEDS}
                className="flex items-center justify-center rounded hover:bg-gray-100 cursor-pointer py-2 px-0.5 text-semibold" >
                <ChevronLeftIcon className="size-5" />
            </Link>
            <div className="avatar placeholder">
                <div className="size-10">
                    <LogoImage src={rssDetail?.image} title={rssDetail?.title!} width={40} height={40} />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <p className="text-gray-700 font-bold">{rssDetail?.title}</p>
                </div>
                {rssDetail?.link && <Link className="text-gray-500 text-xs hover:text-blue-700 cursor-pointer" href={rssDetail?.link}>{rssDetail?.link}</Link>}
            </div>
        </div>
    )
}