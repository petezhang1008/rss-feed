'use client'
import useInfiniteScroll from "react-infinite-scroll-hook";
import FeedItem from "./feed-item";
import { Bundle, Feed, RssGenerator } from "@prisma/client";
import { useState } from "react";
import { PaginationFeeds } from "@/models/feed-model";
import FeedCardSkeleton from "@/app/components/skeleton/feed-card-skeleton";
import NoMoreData from "@/app/components/more-data/no-more-data";
import { useClientBundleFeeds } from "../../hooks/client/use-feeds";

export default function FeedList({ paginationFeeds, bundle }: { paginationFeeds: PaginationFeeds, bundle: Bundle }) {
    const [feedList, setFeedList] = useState<Feed[]>(paginationFeeds?.result || [])
    const [page, setPage] = useState(paginationFeeds?.page || 1)
    const [pageSize, setPageSize] = useState(paginationFeeds?.pageSize || 50)
    const [total, setTotal] = useState(paginationFeeds?.total || 0)

    const { getBundleFeedsApi } = useClientBundleFeeds()

    function fetchData() {
        getBundleFeedsApi({
            page: page + 1,
            pageSize,
            bundleId: bundle?.id || ''
        }).then(res => {
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
            <FeedCardSkeleton />
        </div>}
        {(total === feedList.length) && <NoMoreData />}
    </>
}