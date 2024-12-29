'use client'
import useInfiniteScroll from "react-infinite-scroll-hook";
import FeedItem from "./feed-item";
import { useEffect } from "react";
import { PaginationFeeds } from "@/models/feed-model";
import FeedCardSkeleton from "@/app/components/skeleton/feed-card-skeleton";
import NoMoreData from "@/app/components/more-data/no-more-data";
import { UserRssWithRss } from "@/types/model";
import useFeedsPaginationStore from "../../stores/use-feeds-pagination";

export default function FeedList({
    paginationFeeds,
    rssDetail,
}: {
    paginationFeeds: PaginationFeeds,
    rssDetail: UserRssWithRss,
}) {

    const {
        feedList,
        total,
        init,
        nextPage,
    } = useFeedsPaginationStore()

    useEffect(() => {
        init(rssDetail?.rss?.id || '', paginationFeeds)
    }, [rssDetail])

    const [ref] = useInfiniteScroll({
        loading: false,
        hasNextPage: total > feedList.length,
        onLoadMore: nextPage
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