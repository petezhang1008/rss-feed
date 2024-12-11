import { RssGenerator } from '@prisma/client'
import Link from 'next/link'
import useMyFeeds from '../../hooks/use-my-feeds'
import ActionBtn from './action-btn'


export default function MyFeedItem({ rss }: { rss: RssGenerator }) {

    const { getDomain } = useMyFeeds()
    if (!rss) return null
    return (
        <Link href={`/management/feed/${rss.id}`}>
            <div className="flex flex-col w-full gap-6 p-4 rounded-lg bg-white cursor-pointer border border-gray-200">
                <div className='flex items-start gap-4'>
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-10 rounded-lg">
                            <span className="text-xs">{rss.title?.slice(0, 2)}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <h4 className='text-gray-800'>{rss.title}</h4>
                        <p className='text-gray-500 text-xs'>{rss.description}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className="badge badge-ghost">{getDomain(rss.website)}</div>
                    <ActionBtn rss={rss} />
                </div>
            </div>
        </Link>
    )
}