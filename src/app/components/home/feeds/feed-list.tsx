'use client'
import useInfiniteScroll from "react-infinite-scroll-hook";
import FeedItem from "./feed-item";
import { Feed } from "@prisma/client";
import { useState } from "react";
import { PaginationFeeds } from "@/models/feed-model";
import NoMoreData from "@/app/components/more-data/no-more-data";
import { useClientFeeds } from "../hooks/client/use-feeds";
import { useSession } from "next-auth/react";
import FeedsSkeletonItem from "../../skeleton/feeds-skeleton-item";


export default function FeedList({ paginationFeeds, bundleId }: { paginationFeeds: PaginationFeeds, bundleId: string }) {
    const [feedList, setFeedList] = useState<Feed[]>(paginationFeeds?.result || [])
    const [page, setPage] = useState(paginationFeeds?.page || 1)
    const [pageSize, setPageSize] = useState(paginationFeeds?.pageSize || 50)
    const [total, setTotal] = useState(paginationFeeds?.total || 0)


    const { getFeedsApi } = useClientFeeds()
    const { data: session } = useSession()

    async function fetchData() {
        const params = {
            page: page + 1,
            pageSize,
            bundleId: bundleId || undefined,
            userId: session?.user?.id || ''
        }
        if (!bundleId) {
            delete params.bundleId
        }
        getFeedsApi(params).then(res => {
            setFeedList(feedList.concat(res.result))
            setPage(page + 1)
            setPageSize(pageSize + 50)
            setTotal(res.total)
        })
    }

    const [ref] = useInfiniteScroll({
        loading: false,
        hasNextPage: total > feedList.length,
        onLoadMore: fetchData
    });

    return <>
        {feedList.map(feed => {
            return (<FeedItem feed={feed} key={feed.id} />)
        })}
        {(total > feedList.length) && <div ref={ref}>
            <FeedsSkeletonItem />
        </div>}
        {(total === feedList.length) && <NoMoreData />}
    </>
}