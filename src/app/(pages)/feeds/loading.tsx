import FeedsSkeleton from '@/app/components/skeleton/feeds-skeleton'
import HeaderSkeleton from '@/app/components/skeleton/header-skeleton'
import NavSkeleton from '@/app/components/skeleton/nav-skeleton'
import SuggestionSkeleton from '@/app/components/skeleton/suggestion-skeleton'
import React from 'react'

export default function Loading() {
    return (
        <div className="size-full flex flex-col items-center justify-center bg-gray-50">
            <HeaderSkeleton />
            <div className='w-[1180px] flex gap-6 mx-auto grow overflow-auto p-4'>
                <NavSkeleton />
                <FeedsSkeleton />
                <SuggestionSkeleton />
            </div>
        </div>
    )
}