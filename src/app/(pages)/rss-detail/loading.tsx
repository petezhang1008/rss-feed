import FeedsSkeleton from '@/app/components/skeleton/feeds-skeleton'
import HeaderSkeleton from '@/app/components/skeleton/header-skeleton'
import RssInfoCardSkeleton from '@/app/components/skeleton/rss-info-card-skeleton'
import SuggestionSkeleton from '@/app/components/skeleton/suggestion-skeleton'
import React from 'react'

export default function Loading() {
    return (
        <div className="size-full flex flex-col items-center justify-center bg-gray-50">
            <HeaderSkeleton />
            <div className='w-[980px] flex gap-6 mx-auto grow overflow-auto p-4'>
                <div className='flex flex-col grow gap-4'>
                    <RssInfoCardSkeleton />
                    <FeedsSkeleton />
                </div>
                <SuggestionSkeleton />
            </div>
        </div>
    )
}