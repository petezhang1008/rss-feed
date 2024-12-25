'use client'
import useInfiniteScroll from "react-infinite-scroll-hook";
import FeedItem from "./feed-item";
import { useState } from "react";
import { useClientFeeds } from "../../hooks/client/use-feeds";
import { PaginationFeeds } from "@/models/feed-model";
import FeedCardSkeleton from "@/app/components/skeleton/feed-card-skeleton";
import NoMoreData from "@/app/components/more-data/no-more-data";
import { UserRss, Feed } from "@/types/model";

export default function FeedList({ paginationFeeds, rssDetail }: { paginationFeeds: PaginationFeeds, rssDetail: UserRss }) {
    const [feedList, setFeedList] = useState<Feed[]>(paginationFeeds?.result || [])
    const [page, setPage] = useState(paginationFeeds?.page || 1)
    const [pageSize] = useState(paginationFeeds?.pageSize || 50)
    const [total, setTotal] = useState(paginationFeeds?.total || 0)

    const { getFeedsApi } = useClientFeeds()

    function fetchData() {
        getFeedsApi({
            page: page + 1,
            pageSize,
            rssId: rssDetail?.id || ''
        }).then(res => {
            setFeedList(feedList.concat(res.result))
            setPage(page + 1)
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
            <FeedCardSkeleton />
        </div>}
        {(total === feedList.length) && <NoMoreData />}
    </>
}