import { RssGenerator } from '@prisma/client'
import MyRssItem from './feed-item'

export default function MyFeedsContent({ feedList }: { feedList: RssGenerator[] }) {
    return (
        <div className='grid gap-4 grid-cols-3 w-full'>
            {
                feedList.map(feed => {
                    return (<MyRssItem feed={feed}></MyRssItem>)
                })
            }
        </div>
    )
}