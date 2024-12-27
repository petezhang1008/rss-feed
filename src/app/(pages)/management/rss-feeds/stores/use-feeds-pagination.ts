
import { injectService } from '@/inversify.config'
import { GetFeedParams } from '@/models/feed-model'
import { FeedService } from '@/services/prisma/feed-service'
import { Feed } from '@prisma/client'
import { create } from 'zustand'

export interface IframeDataStore {
    allFeeds: Feed[]
    total: number
    page: number
    pageSize: number
    isLoading: boolean
    getFeeds: (rssId: string) => Promise<void>
    reset: () => void
}

const useFeedsPaginationStore = create<IframeDataStore>((set, get) => ({
    feedId: '',
    isLoading: false,
    allFeeds: [],
    total: 0,
    page: 0,
    pageSize: 50,
    getFeeds: async (rssId: string) => {
        set({ isLoading: true })
        const feedService = injectService<FeedService>(FeedService)
        const { page, pageSize } = get()
        const nextPage = page + 1
        const params: GetFeedParams = {
            rssId: rssId,
            page: nextPage,
            pageSize,
        }
        const res = await feedService.getFeed(params)
        set({
            allFeeds: [...get().allFeeds, ...res.result],
            total: res.total,
            page: res.page,
            pageSize: res.pageSize,
        })
        set({ isLoading: false })
    },
    reset: () => {
        set({
            allFeeds: [],
            total: 0,
            page: 0,
            pageSize: 50,
        })
    },
}))

export default useFeedsPaginationStore
