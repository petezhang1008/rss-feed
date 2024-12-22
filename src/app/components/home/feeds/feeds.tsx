import { PaginationFeeds } from "@/models/feed-model";
import FeedList from "./feed-list";
import { NoData } from "@/app/(pages)/management/feed/components/content/no-data";

export default function Feeds({ paginationFeeds, bundleId }: { paginationFeeds: PaginationFeeds, bundleId: string }) {
    return (
        <div className="flex-1 overflow-hidden grow">
            <div className="flex flex-col bg-white rounded shadow-sm">
                {
                    paginationFeeds?.result.length > 0 ?
                        <FeedList paginationFeeds={paginationFeeds} bundleId={bundleId} /> : <NoData />
                }
            </div>
        </div>
    )
}