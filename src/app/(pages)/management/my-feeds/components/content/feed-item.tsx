import { DotsVerticalIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'

export default function MyFeedItem({ feed }: any) {
    return (
        <div className="flex flex-col w-full gap-4 p-4 rounded-lg bg-white box-shadow-md hover:bg-gray-100 cursor-pointer">
            <div className="flex justify-end">
                <DotsVerticalIcon></DotsVerticalIcon>
            </div>
            <div className='flex items-start gap-4'>
                <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                        <span className="text-xs">UI</span>
                    </div>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <h4 className='text-gray-800'>{feed.title}</h4>
                    <p className='text-gray-500 text-xs'>{feed.desc}</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className="badge badge-ghost">{feed.link}</div>
                <div>
                    <DotsHorizontalIcon></DotsHorizontalIcon>
                </div>
            </div>
        </div>
    )
}