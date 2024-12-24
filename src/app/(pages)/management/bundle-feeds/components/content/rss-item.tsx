import LogoImage from "@/app/components/common/logo-image"
import { RouterName } from "@/enums/router"
import { UserRssWithRssAndBundle } from "@/types/model"
import Link from "next/link"

export function RssItem({ rss }: { rss: UserRssWithRssAndBundle }) {
    return (
        <Link href={`${RouterName.FEEDS}/${rss?.id}`} target="_blank" className="flex items-center gap-2">
            <div className="avatar placeholder">
                <div className="size-6">
                    <LogoImage src={rss.rss?.image} title={rss?.title} width={40} height={40} />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2 truncate">
                    <p className="text-sm">{rss?.title}</p>
                </div>
            </div>
        </Link>
    )
}