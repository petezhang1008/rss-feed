import { Rss, RssDetail } from "@/types/model";
import RssFrequency from "../../management/rss-feeds/components/content/rss-frequency";
import RssCreated from "./rss-created";

export default function RssDetailRightSidebar({ rssDetail }: { rssDetail: RssDetail }) {

    return <div className="w-80 flex flex-col gap-4 shrink-0">
        <div className="bg-white rounded-md shadow-sm p-4">
            <RssCreated rss={rssDetail as Rss} />
        </div>
        <div className="bg-white rounded-md shadow-sm p-4">
            <RssFrequency rss={rssDetail as Rss} />
        </div>
    </div>
}