import BundleInfo from "./bundle-info"
import { Bundle, Feed } from "@/types/model"
import { NoData } from "./no-data"
import { PaginationFeeds } from "@/models/feed-model"
import FeedList from "./feed-list"

export default function FeedContent({ paginationFeeds, bundle }: { paginationFeeds: PaginationFeeds, bundle: Bundle }) {
    return (
        <div className="flex gap-4 overflow-hidden w-full">
            <div className='grid-flow-dense auto-rows-auto gap-4 flex flex-col overflow-hidden w-3/5 pl-20 pr-8'>
                {
                    paginationFeeds.result.length > 0 ? <FeedList paginationFeeds={paginationFeeds} bundle={bundle} /> : <NoData />
                }
            </div>
            <div className="flex">
                <BundleInfo bundle={bundle} />
            </div>
        </div>
    )
}