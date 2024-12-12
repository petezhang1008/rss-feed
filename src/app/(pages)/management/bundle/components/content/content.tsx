import FeedItem from "./feed-item"
import { Feed } from "@prisma/client"

export default function FeedContent({ feeds }: { feeds: Feed[] }) {
    return (
        <div className="flex gap-4 overflow-hidden w-full">
            <div className='grid-flow-dense auto-rows-auto gap-4 flex flex-col overflow-hidden w-3/5 px-20'>
                {
                    feeds.map(feed => {
                        return (<FeedItem feed={feed}></FeedItem>)
                    })
                }
            </div>
            <div className="flex">Right</div>
        </div>
    )
}