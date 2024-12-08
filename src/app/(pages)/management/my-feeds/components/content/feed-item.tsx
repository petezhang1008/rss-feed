import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { RssGenerator } from '@prisma/client'
import Link from 'next/link'
import useMyFeeds from '../../hooks/use-my-feeds'

export default function MyFeedItem({ feed }: { feed: RssGenerator }) {
    const { getDomain } = useMyFeeds()
    return (
        <Link href={`/management/feed/${feed.id}`}>
            <div className="flex flex-col w-full gap-6 p-4 rounded-lg bg-white cursor-pointer border border-gray-200">
                {/* <div className="flex justify-end">
                <DotsVerticalIcon></DotsVerticalIcon>
            </div> */}
                <div className='flex items-center gap-4'>
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-10 rounded-lg">
                            <span className="text-xs">{feed.title?.slice(0, 2)}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <h4 className='text-gray-800'>{feed.title}</h4>
                        <p className='text-gray-500 text-xs'>{feed.description}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className="badge badge-ghost">{getDomain(feed.website)}</div>
                    <div>
                        <DotsHorizontalIcon className='hover:bg-gray-200 rounded-md p-1 size-6'></DotsHorizontalIcon>
                    </div>
                </div>
            </div>
        </Link>
    )
}