import Link from 'next/link'
import ActionBtn from './action-btn'
import { useDayjs } from '@/app/hooks/use-dayjs'
import { RouterName } from '@/enums/router'
import { BundleWithRss } from '@/types/model'

export default function BundleItem({ bundle }: { bundle: BundleWithRss }) {
    const { formatDateToMMDDYYYY } = useDayjs()
    return (
        <Link href={`${RouterName.BUNDLE_FEEDS}/${bundle.id}`}>
            <div className="flex flex-col w-full gap-4 p-4 rounded-lg bg-white hover:shadow-md cursor-pointer border-l-2 border-green-600">
                <div className='flex items-start gap-4 justify-between'>
                    <div className='flex items-start gap-2'>
                        <div className="avatar placeholder">
                            <div className="bg-blue-500 text-neutral-content w-10 rounded-lg">
                                <span className="font-semibold text-md text-white">{bundle.title.slice(0, 2).toUpperCase()}</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <h4 className='text-gray-800'>{bundle.title}</h4>
                            <div className='text-gray-500 text-xs line-clamp-2 h-8'>{bundle.description || '-'}</div>
                        </div>
                    </div>
                    <div className='text-gray-500 text-xs'>{formatDateToMMDDYYYY(bundle.createdAt)}</div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className="badge badge-ghost">{bundle.userRss?.length} RSS</div>
                    <ActionBtn bundle={bundle} />
                </div>
            </div>
        </Link>
    )
}