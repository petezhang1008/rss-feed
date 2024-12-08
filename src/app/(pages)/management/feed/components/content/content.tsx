import FeedItem from "./feed-item"
import { Feed } from "@prisma/client"

export default function FeedContent({ feeds }: { feeds: Feed[] }) {
    return (
        <div className='grid-flow-dense auto-rows-auto grid gap-4 grid-cols-2 overflow-hidden w-full'>
            {
                feeds.map(feed => {
                    return (<FeedItem feed={feed}></FeedItem>)
                })
            }
        </div>
    )
}