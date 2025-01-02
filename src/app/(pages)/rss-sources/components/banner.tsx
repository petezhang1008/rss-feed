import BannerBgImage from '@/app/assets/images/banner-bg.jpg'
export default function Banner() {
    const bgStyle = {
        backgroundImage: `url(${BannerBgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className='flex flex-col gap-12 w-full justify-center items-center p-12' style={bgStyle}>
            <div className='flex flex-col gap-4 w-full justify-center max-w-[1080px]'>
                <h1 className='text-3xl font-bold text-white'>RSS Sources</h1>
                <p className='text-gray-500 text-white'>Discover a wide range of RSS feeds from various sources, including websites, blogs, and social media platforms.</p>
            </div>
        </div>
    )
}