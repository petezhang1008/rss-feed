export default function StartTrial() {
    return (
        <div className='flex flex-col gap-12 w-full justify-center items-center bg-gray-50 p-24'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h1 className='text-3xl font-bold text-primary'>Join thousands of happy users!</h1>
                <p className='text-gray-600 max-w-[800px] text-center leading-7 font-semibold'>Start your free trial today and see the significant difference it makes in enhancing your productivity and simplifying your daily tasks.</p>
            </div>
            <button className='btn-md btn-outline bg-primary !text-white btn-primary btn-wide py-2 rounded-full font-bold'>Get Started</button>
        </div>
    )
}