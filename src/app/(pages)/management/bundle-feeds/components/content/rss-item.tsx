import LogoImage from "@/app/components/common/logo-image"
import { Rss } from "@/types/model"

export function RssItem({ rss }: { rss: Rss }) {
    return (
        <div className="flex items-center gap-2 w-full">
            <div className="avatar placeholder shrink-0">
                <div className="size-6">
                    <LogoImage src={rss?.image} title={rss?.title} />
                </div>
            </div>
            <div className="flex overflow-hidden">
                <div className="text-sm truncate">{rss?.title}</div>
            </div>
        </div>
    )
}