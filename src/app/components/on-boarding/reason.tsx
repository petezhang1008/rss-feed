import GeneratorIcon from '@/app/assets/images/on-boarding/generator.svg'
import ImageIcon from '@/app/assets/images/on-boarding/image.svg'
import LikeIcon from '@/app/assets/images/on-boarding/like.svg'


export default function Reason() {
    return (
        <div className='flex flex-col gap-12 w-full justify-center items-center p-12'>
            <h1 className='text-3xl font-bold text-neutral-800'>3 Reasons Why You Should Use EasyRSS</h1>
            <div className='flex gap-8 w-full justify-center items-center max-w-[1180px]'>
                <div className='flex flex-col gap-4 w-full justify-start items-center border rounded-lg p-12 text-center h-[320px]'>
                    <GeneratorIcon className='shrink-0' />
                    <h1 className='text-2xl font-bold text-neutral-800 mt-4'>Generate RSS feeds</h1>
                    <p className='text-gray-500 font-semibold'>No coding required. Our feed generator can pick the right content for you</p>
                </div>
                <div className='flex flex-col gap-4 w-full justify-start items-center border rounded-lg p-12 text-center h-[320px]'>
                    <ImageIcon className='shrink-0' />
                    <h1 className='text-2xl font-bold text-neutral-800  mt-4'>Embed News Feeds</h1>
                    <p className='text-gray-500 font-semibold'>Add auto-updated dynamic content to your website or mobile app</p>
                </div>
                <div className='flex flex-col gap-4 w-full justify-start items-center border rounded-lg p-12 text-center h-[320px]'>
                    <LikeIcon className='shrink-0' />
                    <h1 className='text-2xl font-bold text-neutral-800  mt-4'>Increase Engagement</h1>
                    <p className='text-gray-500 font-semibold'>Syndicate your content and make it easy for users to access and consume your content</p>
                </div>
            </div>
        </div>
    )
}