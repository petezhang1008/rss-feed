import { DotsVerticalIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'

export default function MyFeedItem({ feed }: any) {
    return (
        <div className="flex flex-col w-full gap-6 p-4 rounded-lg bg-white hover:shadow-md cursor-pointer">
            {/* <div className="flex justify-end">
                <DotsVerticalIcon></DotsVerticalIcon>
            </div> */}
            <div className='flex items-center gap-4'>
                <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-lg">
                        <span className="text-xs">UI</span>
                    </div>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <h4 className='text-gray-800'>{feed.title}</h4>
                    <p className='text-gray-500 text-xs'>{feed.desc}</p>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className="badge badge-ghost">{feed.link}</div>
                <div>
                    <DotsHorizontalIcon className='hover:bg-gray-200 rounded-md p-1 size-6'></DotsHorizontalIcon>
                </div>
            </div>
        </div>
    )
}