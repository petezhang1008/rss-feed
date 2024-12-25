import LogoImage from "@/app/components/common/logo-image"
import { RouterName } from "@/enums/router"
import { Rss } from "@/types/model"
import Link from "next/link"

export function RssItem({ rss }: { rss: Rss }) {
    return (
        <Link href={`${RouterName.RSS_FEEDS}/${rss?.id}`} target="_blank" className="flex items-center gap-2 w-full">
            <div className="avatar placeholder shrink-0">
                <div className="size-6">
                    <LogoImage src={rss?.image} title={rss?.title} width={40} height={40} />
                </div>
            </div>
            <div className="flex flex-col flex-grow overflow-hidden">
                <p className="text-sm truncate">{rss?.title}</p>
            </div>
        </Link>
    )
}