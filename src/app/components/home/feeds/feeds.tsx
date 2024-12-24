import { PaginationFeeds } from "@/models/feed-model";
import FeedList from "./feed-list";
import { NoData } from "@/app/(pages)/management/rss-feeds/components/content/no-data";
import { Category } from "@/types/model";

export default function Feeds({ paginationFeeds, categoryId }: { paginationFeeds: PaginationFeeds, categoryId: string }) {
    return (
        <div className="flex-1 overflow-hidden grow">
            {
                paginationFeeds?.result.length > 0 ?
                    <FeedList paginationFeeds={paginationFeeds} categoryId={categoryId} /> : <NoData />
            }
        </div>
    )
}