'use client'
import useInfiniteScroll from "react-infinite-scroll-hook";
import FeedItem from "./feed-item";
import { Bundle, Feed, FeedWithRss } from "@/types/model";
import { useState } from "react";
import FeedCardSkeleton from "@/app/components/skeleton/feed-card-skeleton";
import NoMoreData from "@/app/components/more-data/no-more-data";
import { useClientBundleFeeds } from "../../hooks/client/use-feeds";
import { FeedWithUserRss, PaginationFeedsWithUserRss } from "@/services/prisma/feed-service";

export default function FeedList({ paginationFeeds, bundle }: { paginationFeeds: PaginationFeedsWithUserRss, bundle: Bundle }) {
    const [feedList, setFeedList] = useState<Feed[]>(paginationFeeds?.result || [])
    const [page, setPage] = useState(paginationFeeds?.page || 1)
    const [pageSize] = useState(paginationFeeds?.pageSize || 50)
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
            return (<FeedItem feed={feed as FeedWithUserRss} key={feed.id} />)
        })}
        {(total > feedList.length) && <div ref={ref}>
            <FeedCardSkeleton />
        </div>}
        {(total === feedList.length) && <NoMoreData />}
    </>
}