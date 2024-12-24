'use client'
import useInfiniteScroll from "react-infinite-scroll-hook";
import FeedItem from "./feed-item";
import { Category, Feed } from "@/types/model";
import { useState } from "react";
import { PaginationFeeds } from "@/models/feed-model";
import NoMoreData from "@/app/components/more-data/no-more-data";
import { useClientFeeds } from "../hooks/client/use-feeds";
import FeedsSkeletonItem from "../../skeleton/feeds-skeleton-item";


export default function FeedList({ paginationFeeds, categoryId }: { paginationFeeds: PaginationFeeds, categoryId: string }) {
    const [feedList, setFeedList] = useState<Feed[]>(paginationFeeds?.result || [])
    const [page, setPage] = useState(paginationFeeds?.page || 1)
    const [pageSize, setPageSize] = useState(paginationFeeds?.pageSize || 50)
    const [total, setTotal] = useState(paginationFeeds?.total || 0)


    const { getFeedsApi } = useClientFeeds()

    async function fetchData() {
        const params = {
            page: page + 1,
            pageSize,
            categoryId
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
        <div className="flex flex-col bg-white rounded shadow-sm">
            {feedList.map(feed => {
                return (<FeedItem feed={feed} key={feed.id} />)
            })}
            {(total > feedList.length) && <div ref={ref}>
                <FeedsSkeletonItem />
            </div>}
        </div>
        {(total === feedList.length) && <NoMoreData />}
    </>
}