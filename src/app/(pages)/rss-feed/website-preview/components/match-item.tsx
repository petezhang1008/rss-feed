import Image from 'next/image';

export default function MatchItem({data}) {
    const imgSrc = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1651369541887/ZHAOor8nY.jpg';
    return (
        <div className="matching-item flex justify-between rounded-lg border border-gray-100 overflow-hidden bg-gray-50 gap-1.5">
            <div className="flex items-center justify-center shrink-0 overflow-hidden bg-white p-1.5">
                <Image src={imgSrc} width={120} height={80} alt='matching'></Image>
            </div>
            <div className='flex flex-col gap-0.5 grow overflow-hidden p-2'>
                <p className='text-sm text-gray-700 truncate'>Title{ data}</p>
                <p className='text-sm text-gray-400 truncate'>desc</p>
                <p className='text-xs text-blue-400 truncate'>https://nasserspace.hashnode.dev/series/vue-3-explained</p>
                <div className='flex justify-between items-center mt-1'>
                    <div className='text-xs text-gray-600'>Ahmed Nasser</div>
                    <div className='text-xs text-gray-400'>2020-01-01</div>
                </div>
            </div>
        </div>
    )
}