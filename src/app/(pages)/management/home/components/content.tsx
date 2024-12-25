import { PaginationFeeds } from "@/models/feed-model";
import FeedList from "./feed-list";
import { NoData } from "../../bundle-feeds/components/content/no-data";

export default function Content({ paginationFeeds }: { paginationFeeds: PaginationFeeds }) {
    return (<div className="flex gap-4 w-full">
        <div className='grid-flow-dense auto-rows-auto gap-4 flex flex-col overflow-hidden w-3/5 pl-20 pr-8'>
            {
                paginationFeeds.result.length > 0 ? <FeedList paginationFeeds={paginationFeeds} /> : <NoData />
            }
        </div>
        <div className="flex">
        </div>
    </div>)
}