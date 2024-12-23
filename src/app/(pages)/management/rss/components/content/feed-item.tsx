import Link from 'next/link'
import useMyFeeds from '../../hooks/use-my-feeds'
import ActionBtn from './action-btn'
import LogoImage from '@/app/components/common/logo-image'
import BundleTag from './bundle-tag'
import { UserRss } from '@/types/model'


export default function MyFeedItem({ rss }: { rss: UserRss }) {

    const { getDomain } = useMyFeeds()
    if (!rss) return null
    return (
        <Link href={`/management/feed/${rss.id}`}>
            <div className="flex flex-col w-full gap-6 p-4 rounded-lg bg-white cursor-pointer border border-gray-200">
                <div className='flex items-start gap-4'>
                    <div className="avatar placeholder">
                        <div className="size-10">
                            <LogoImage src={rss.image} title={rss.title!} width={40} height={40} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <h4 className='text-gray-800'>{rss.title}</h4>
                        <div className="line-clamp-2 h-[32px]">
                            <p className='text-gray-500 text-xs'>{rss.description || '-'}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <BundleTag rss={rss} />
                    <ActionBtn rss={rss} />
                </div>
            </div>
        </Link>
    )
}