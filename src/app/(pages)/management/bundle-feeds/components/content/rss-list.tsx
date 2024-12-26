import { RouterName } from "@/enums/router"
import Link from "next/link"
import { RssItem } from "./rss-item"
import { Rss } from "@/types/model"

export function RssList({ rssList }: { rssList: Rss[] }) {
    return <div className="flex flex-col gap-2">
        {rssList && rssList.map(rss => {
            return (
                <div key={rss.id} className="flex items-center gap-2 hover:bg-gray-100 hover:text-blue-700 px-2 py-1 rounded-md cursor-pointer">
                    <Link href={`${RouterName.RSS_FEEDS}/${rss?.id}`} target="_blank">
                        <RssItem rss={rss} />
                    </Link>
                </div>)
        })}
    </div>
}