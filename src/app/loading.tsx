import React from 'react'
import HeaderSkeleton from './components/skeleton/header-skeleton'
import NavSkeleton from './components/skeleton/nav-skeleton'
import FeedsSkeleton from './components/skeleton/feeds-skeleton'
import SuggestionSkeleton from './components/skeleton/suggestion-skeleton'

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