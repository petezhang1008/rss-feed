import NoCodingBold2Icon from '@/app/assets/images/on-boarding/NoCodingBold2.svg'
import Images2Icon from '@/app/assets/images/on-boarding/Images2.svg'
import Share2Icon from '@/app/assets/images/on-boarding/Share2.svg'
import SocialMedia2Icon from '@/app/assets/images/on-boarding/SocialMedia2.svg'


export default function KeyFeature() {
    return (
        <div className='flex flex-col gap-12 w-full justify-center items-center bg-gray-50 p-16'>
            <h1 className='text-3xl font-bold text-neutral-800'>Top Features</h1>
            <div className='grid grid-cols-2 gap-8 w-full justify-center items-center max-w-[1180px]'>
                <div className='flex items-center gap-8 h-24'>
                    <NoCodingBold2Icon className=' shrink-0' />
                    <div className='flex flex-col gap-2 justify-start items-start'>
                        <h1 className='text-2xl font-bold text-neutral-800'>No Coding</h1>
                        <p className='text-gray-500 font-semibold'>Simply copy and paste the URL into the feed generator or RSS builder</p>
                    </div>
                </div>
                <div className='flex items-center gap-8 h-24'>
                    <Images2Icon className=' shrink-0' />
                    <div className='flex flex-col gap-2 justify-start items-start'>
                        <h1 className='text-2xl font-bold text-neutral-800'>Customization</h1>
                        <p className='text-gray-500 font-semibold'>Extract large images & customize your feed with advanced filters</p>
                    </div>
                </div>
                <div className='flex items-center gap-8 h-24'>
                    <Share2Icon className=' shrink-0' />
                    <div className='flex flex-col gap-2 justify-start items-start'>
                        <h1 className='text-2xl font-bold text-neutral-800'>Auto-updated</h1>
                        <p className='text-gray-500 font-semibold'>The feed will update automatically, so you never miss any updates</p>
                    </div>
                </div>
                <div className='flex items-center gap-8 h-24'>
                    <SocialMedia2Icon className=' shrink-0' />
                    <div className='flex flex-col gap-2 justify-start items-start'>
                        <h1 className='text-2xl font-bold text-neutral-800'>Dynamic Widgets</h1>
                        <p className='text-gray-500 font-semibold'>Bring content to your users with adaptive and simple widgets</p>
                    </div>
                </div>
            </div>
        </div>
    )
}