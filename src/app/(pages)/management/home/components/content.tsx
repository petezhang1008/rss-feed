import FeedList from "./feed-list";
import { NoData } from "../../bundle-feeds/components/content/no-data";
import { PaginationFeedsWithUserRss } from "@/services/prisma/feed-service";
import UpdatedRssList from "./updated-rss-list";
import { UserRssWithTaskSuccessCount } from "@/services/prisma/user-rss-service";

export default function Content({ paginationFeeds, userRssList }: { paginationFeeds: PaginationFeedsWithUserRss, userRssList: UserRssWithTaskSuccessCount[] }) {
    return (<div className="flex gap-4 w-full">
        <div className='grid-flow-dense auto-rows-auto gap-4 flex flex-col overflow-hidden w-3/5 pl-20 pr-8'>
            {
                paginationFeeds.result.length > 0 ? <FeedList paginationFeeds={paginationFeeds} /> : <NoData />
            }
        </div>
        <div className="flex w-80">
            <UpdatedRssList rssList={userRssList} />
        </div>
    </div>)
}