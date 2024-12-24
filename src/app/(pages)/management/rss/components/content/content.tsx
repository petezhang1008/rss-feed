import MyRssItem from './feed-item'
import { UserRssWithRssAndBundle } from '@/types/model'

export default function MyFeedsContent({ rssList }: { rssList: UserRssWithRssAndBundle[] }) {
    return (
        <div className='grid gap-4 grid-cols-3 w-full'>
            {
                rssList.map(rss => {
                    return (<MyRssItem rss={rss} key={rss.id}></MyRssItem>)
                })
            }
        </div>
    )
}