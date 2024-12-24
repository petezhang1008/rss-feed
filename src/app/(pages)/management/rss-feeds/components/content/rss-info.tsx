import RssBundles from "./rss-bundles";
import RssCustomize from "./rss-customize";
import RssCreated from "./rss-created";
import RssFrequency from "./rss-frequency";
import { UserRss } from "@/types/model";

export default function RssInfo({ rssDetail }: { rssDetail: UserRss }) {

    return (
        rssDetail ? (
            <div className="flex flex-col gap-4 w-80 pt-4">
                <RssCustomize rssDetail={rssDetail} />
                <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                    <h1 className="font-semibold">Description</h1>
                    <div className="text-gray-500 text-sm">{rssDetail.description || 'No description'}</div>
                </div>
                {rssDetail.rss.author && <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                    <h1 className="font-semibold">Author</h1>
                    <div className="text-gray-500 text-sm">{rssDetail.rss.author}</div>
                </div>}
                <RssFrequency rssDetail={rssDetail} />
                <RssCreated rssDetail={rssDetail} />
                <RssBundles rssDetail={rssDetail} />
            </div >
        ) : <div>Loading...</div>
    )
}