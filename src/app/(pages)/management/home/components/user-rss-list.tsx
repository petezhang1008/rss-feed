import { RouterName } from "@/enums/router";
import { UserRssWithTaskSuccessCount } from "@/services/prisma/user-rss-service";
import Link from "next/link";
import { RssItem } from "../../bundle-feeds/components/content/rss-item";

export function UserRssList({ rssList }: { rssList: UserRssWithTaskSuccessCount[] }) {
    return <div className="flex flex-col gap-2">
        {rssList && rssList.map(userRss => {
            return (
                <div key={userRss.id} className="flex items-center gap-2 hover:bg-gray-100 hover:text-blue-700 px-2 py-1 rounded-md cursor-pointer">
                    <Link href={`${RouterName.RSS_FEEDS}/${userRss?.id}`} target="_blank"
                        className="overflow-hidden flex items-center justify-between w-full gap-4">
                        <div className="flex items-center gap-2 overflow-hidden">
                            <RssItem rss={userRss?.rss} />
                        </div>
                        <span className="text-gray-400 font-semibold bg-gray-100 rounded-md py-1 px-1.5 text-xs shrink-0" >{userRss.taskSuccessCount}</span>
                    </Link>
                </div>)
        })}
    </div>
}