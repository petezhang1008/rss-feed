import HeaderSkeleton from '@/app/components/skeleton/header-skeleton'
import RssItemCardSkeleton from '@/app/components/skeleton/rss-item-card-skeleton'
import SuggestionSkeleton from '@/app/components/skeleton/suggestion-skeleton'
import React from 'react'

export default function Loading() {
    return (
        <div className="size-full flex flex-col items-center justify-center bg-gray-50">
            <HeaderSkeleton />
            <div className='flex w-full h-full overflow-auto'>
                <div className='flex flex-col grow p-4 justify-start items-center'>
                    <div className='flex gap-6 grow flex-col w-full items-center'>
                        <div className='h-32 w-[1180px] skeleton rounded-md shrink-0'></div>
                        <div className='flex grow gap-4 w-full justify-center'>
                            <SuggestionSkeleton />
                            <div className='flex flex-col gap-4 w-3/5'>
                                <div className='grid grid-cols-3 gap-4 grow'>
                                    {Array.from({ length: 24 }).map((_, index) => (
                                        <RssItemCardSkeleton key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}