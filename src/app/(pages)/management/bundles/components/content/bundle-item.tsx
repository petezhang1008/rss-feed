import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Bundle } from '@prisma/client'
import Link from 'next/link'

export default function BundleItem({ bundle }: { bundle: Bundle }) {
    return (
        <Link href={`/management/bundle/${bundle.id}`}>
            <div className="flex flex-col w-full gap-6 p-4 rounded-lg bg-white hover:shadow-md cursor-pointer border-l-2 border-green-600">
                <div className='flex items-center gap-4 justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className="avatar placeholder">
                            <div className="bg-blue-500 text-neutral-content w-10 rounded-lg">
                                <span className="text-lg font-bold text-white">{bundle.title.charAt(0).toUpperCase()}</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <h4 className='text-gray-800'>{bundle.title}</h4>
                            <div className='text-gray-500 text-xs'>{bundle.description}</div>
                        </div>
                    </div>
                    <div className='text-gray-500 text-xs'>{bundle.createdAt.toLocaleDateString()}</div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className="badge badge-ghost">{bundle.rssGenerators?.length} Feeds</div>
                    <div>
                        <DotsHorizontalIcon className='hover:bg-gray-200 rounded-md p-1 size-6'></DotsHorizontalIcon>
                    </div>
                </div>
            </div>
        </Link>
    )
}