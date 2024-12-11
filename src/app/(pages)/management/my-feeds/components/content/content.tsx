import { RssGenerator } from '@prisma/client'
import MyRssItem from './feed-item'

export default function MyFeedsContent({ rssList }: { rssList: RssGenerator[] }) {
    return (
        <div className='grid gap-4 grid-cols-3 w-full'>
            {
                rssList.map(rss => {
                    return (<MyRssItem rss={rss}></MyRssItem>)
                })
            }
        </div>
    )
}