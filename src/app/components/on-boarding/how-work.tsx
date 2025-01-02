import HowItWork1Icon from '@/app/assets/images/on-boarding/hw1.svg'
import HowItWork2Icon from '@/app/assets/images/on-boarding/hw2.svg'
import HowItWork3Icon from '@/app/assets/images/on-boarding/hw3.svg'

export default function HowWork() {
    return (
        <div className='flex flex-col gap-12 w-full justify-center items-center p-12'>
            <h1 className='text-3xl font-bold text-neutral-800'>How does it work?</h1>
            <div className="grid grid-cols-3 gap-12">
                <div className="flex gap-4">
                    <HowItWork1Icon className='shrink-0 w-28' />
                    <div>
                        <h1 className='text-xl font-bold text-neutral-800'>1. Enter a source URL</h1>
                        <div className='flex flex-col gap-2 pl-3 mt-3'>
                            <p className='text-gray-600 text-sm w-48'>So you'd like to track updates from your favorite feed reader. But it doesn't provide an RSS.</p>
                            <p className='text-gray-600 text-sm w-48'>Just enter its URL to our service.</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <HowItWork2Icon className='shrink-0 w-20' />
                    <div>
                        <h1 className='text-xl font-bold text-neutral-800'>2. We'll pull the news</h1>
                        <div className='flex flex-col gap-2 pl-3 mt-3'>
                            <p className='text-gray-600 text-sm w-48'>Our bot will scan the page and automatically detect all the news, posts, and articles.</p>
                            <p className='text-gray-600 text-sm w-48'>Or you could specify which exact content you'd like to have in your feed.</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <HowItWork3Icon className='shrink-0 w-[88px]' />
                    <div>
                        <h1 className='text-xl font-bold text-neutral-800'>3. You have your RSS</h1>
                        <div className='flex flex-col gap-2 pl-3 mt-3'>
                            <p className='text-gray-600 text-sm w-48'>We'll do all the requests and other necessary magic. And you get your RSS feed available any time by a unique URL.</p>
                            <p className='text-gray-600 text-sm w-48'>From now on, you can read that feed in any service of your choice.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}