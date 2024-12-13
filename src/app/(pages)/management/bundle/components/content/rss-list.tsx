import { RssGenerator } from "@prisma/client"
import { RssItem } from "./rss-item"
import Link from "next/link"
import { RouterName } from "@/enums/router"

export function RssList({ rssList }: { rssList: RssGenerator[] }) {
    return <div className="flex flex-col gap-2">
        {rssList.map(rss => {
            return (
                <div className="flex items-center gap-2 hover:bg-gray-100 hover:text-blue-700 px-2 py-1 rounded-md cursor-pointer">
                    <RssItem rss={rss} />
                </div>)
        })}
    </div>
}