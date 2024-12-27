import { RouterName } from "@/enums/router"
import Link from "next/link"
import { RssItem } from "./rss-item"
import { UserRssWithRss } from "@/types/model"

export function RssList({ rssList }: { rssList: UserRssWithRss[] }) {
    return <div className="flex flex-col gap-2">
        {rssList && rssList.map(userRss => {
            return (
                <div key={userRss.id} className="flex items-center gap-2 hover:bg-gray-100 hover:text-blue-700 px-2 py-1 rounded-md cursor-pointer">
                    <Link href={`${RouterName.RSS_FEEDS}/${userRss?.id}`} target="_blank" className="overflow-hidden">
                        <RssItem rss={userRss?.rss} />
                    </Link>
                </div>)
        })}
    </div>
}