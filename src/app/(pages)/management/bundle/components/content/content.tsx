import BundleInfo from "./bundle-info"
import FeedItem from "./feed-item"
import { Bundle, Feed } from "@prisma/client"
import { NoData } from "./no-data"

export default function FeedContent({ feeds, bundle }: { feeds: Feed[], bundle: Bundle }) {
    return (
        <div className="flex gap-4 overflow-hidden w-full">
            <div className='grid-flow-dense auto-rows-auto gap-4 flex flex-col overflow-hidden w-3/5 pl-20 pr-8'>
                {
                    feeds.length > 0 ? feeds.map(feed => {
                        return (<FeedItem feed={feed}></FeedItem>)
                    }) : <NoData />
                }
            </div>
            <div className="flex">
                <BundleInfo bundle={bundle} />
            </div>
        </div>
    )
}