import { RssGenerator } from "@prisma/client";
import RssBundles from "./rss-bundles";
import RssCustomize from "./rss-customize";
import RssCreated from "./rss-created";
import RssFrequency from "./rss-frequency";

export default function RssInfo({ rssDetail }: { rssDetail: RssGenerator }) {
    return (
        <div className="flex flex-col gap-4 w-80 pt-4">
            <RssCustomize rss={rssDetail} />
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Description</h1>
                <div className="text-gray-500 text-sm">{rssDetail.description || 'No description'}</div>
            </div>
            {rssDetail.author && <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Author</h1>
                <div className="text-gray-500 text-sm">{rssDetail.author}</div>
            </div>}
            <RssFrequency rss={rssDetail} />
            <RssCreated rss={rssDetail} />
            <RssBundles rss={rssDetail} />
        </div >
    )
}