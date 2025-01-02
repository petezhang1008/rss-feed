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
                <h1 className='text-3xl font-bold text-white'>EasyRSS Blog</h1>
                <p className='text-gray-500 text-white'>Stay updated with the latest news and insights from the RSS world.</p>
            </div>
        </div>
    )
}