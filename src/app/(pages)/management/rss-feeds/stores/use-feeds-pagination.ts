import { GetFeedParams, PaginationFeeds } from '@/models/feed-model'
import { Feed } from '@prisma/client'
import { create } from 'zustand'
import { useClientFeeds } from '../hooks/client/use-feeds'


const useFeedsPaginationStore = create<{
    rssId: string
    feedList: Feed[]
    total: number
    page: number
    pageSize: number
    isLoading: boolean
    init: (rssId: string, feeds: PaginationFeeds) => void
    nextPage: () => Promise<void>
    refresh: () => Promise<void>
}>((set, get) => ({
    rssId: '',
    feedList: [],
    total: 0,
    page: 0,
    pageSize: 50,
    isLoading: false,
    init: (rssId: string, paginationFeeds: PaginationFeeds) => {
        set({
            rssId,
            feedList: paginationFeeds.result,
            total: paginationFeeds.total,
            page: paginationFeeds.page,
            pageSize: paginationFeeds.pageSize,
        })
    },
    nextPage: async () => {
        set({ isLoading: true })
        const { getFeedsApi } = useClientFeeds()
        const { page, pageSize } = get()
        const nextPage = page + 1
        const params: GetFeedParams = {
            rssId: get().rssId,
            page: nextPage,
            pageSize,
        }
        const res = await getFeedsApi(params)
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
        const { getFeedsApi } = useClientFeeds()
        const res = await getFeedsApi(params)
        set({
            feedList: res.result,
            total: res.total,
            page: res.page,
            pageSize: res.pageSize,
        })
    },
}))

export default useFeedsPaginationStore
