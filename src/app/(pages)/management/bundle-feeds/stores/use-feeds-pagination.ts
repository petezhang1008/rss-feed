
import { injectService } from '@/inversify.config'
import { GetFeedParams } from '@/models/feed-model'
import { FeedService } from '@/services/prisma/feed-service'
import { Feed } from '@prisma/client'
import { create } from 'zustand'


const useFeedsPaginationStore = create<{
    rssId: string
    feedList: Feed[]
    total: number
    page: number
    pageSize: number
    isLoading: boolean
    init: (rssId: string, feeds: Feed[]) => void
    nextPage: () => Promise<void>
    refresh: () => void
}>((set, get) => ({
    rssId: '',
    feedList: [],
    total: 0,
    page: 0,
    pageSize: 50,
    isLoading: false,
    init: (rssId: string, feeds: Feed[]) => {
        set({
            rssId,
            feedList: feeds,
            total: 0,
            page: 0,
            pageSize: 50,
        })
    },
    nextPage: async () => {
        set({ isLoading: true })
        const feedService = injectService<FeedService>(FeedService)
        const { page, pageSize } = get()
        const nextPage = page + 1
        const params: GetFeedParams = {
            rssId: get().rssId,
            page: nextPage,
            pageSize,
        }
        const res = await feedService.getFeed(params)
        set({
            feedList: [...get().feedList, ...res.result],
            total: res.total,
            page: res.page,
            pageSize: res.pageSize,
        })
        set({ isLoading: false })
    },
    refresh: async () => {
        const params: GetFeedParams = {
            rssId: get().rssId,
            page: 1,
            pageSize: get().pageSize,
        }
        const feedService = injectService<FeedService>(FeedService)
        const res = await feedService.getFeed(params)
        set({
            feedList: res.result,
            total: res.total,
            page: res.page,
            pageSize: res.pageSize,
        })
    },
}))

export default useFeedsPaginationStore
