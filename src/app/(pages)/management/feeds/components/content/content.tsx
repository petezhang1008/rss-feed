import MyRssItem from './feed-item'
import { UserRss } from '@/types/model'

export default function MyFeedsContent({ rssList }: { rssList: UserRss[] }) {
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