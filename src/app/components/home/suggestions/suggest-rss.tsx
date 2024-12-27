import { RssItem } from "@/app/(pages)/management/bundle-feeds/components/content/rss-item";
import { RouterName } from "@/enums/router";
import { Rss } from "@/types/model";
import Link from "next/link";

export default function SuggestRss({ favoriteRssList }: { favoriteRssList: Rss[] }) {
    return (
        <div className="bg-white rounded shadow-sm p-4 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <h4 className="text-base font-semibold text-normal text-neutral-700">Favorites Rss Feeds</h4>
            </div>
            <div className="flex flex-col gap-0.5">
                {favoriteRssList.map((rss) => (
                    <div className="flex items-center hover:bg-gray-100 p-1.5 rounded-md cursor-pointer overflow-hidden" key={rss.id} >
                        <Link href={`${RouterName.RSS_DETAIL}?rssId=${rss?.id}`} target="_blank" className="flex w-full">
                            <RssItem rss={rss} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}