'use client'
import { RssGeneratorType } from "@/enums/rss";
import { RssGenerator } from "@prisma/client";
import { TrashIcon, Pencil1Icon, DotsVerticalIcon, Link2Icon, CounterClockwiseClockIcon, CardStackPlusIcon } from "@radix-ui/react-icons"
import Link from "next/link";
import { useRssAction } from "../../../my-feeds/hooks/use-rss-action";
import { useState } from "react";
import RssBundles from "./rss-bundles";
import RssCustomize from "./rss-customize";
import RssCreated from "./rss-created";
import RssFrequency from "./rss-frequency";
export default function RssInfo({ rssDetail }: { rssDetail: RssGenerator }) {

    const [rssData, setRssData] = useState<RssGenerator>(rssDetail)

    return (
        <div className="flex flex-col gap-4 w-80 pt-4">
            <RssCustomize rss={rssData} />
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Description</h1>
                <div className="text-gray-500 text-sm">{rssData.description || 'No description'}</div>
            </div>
            {rssData.author && <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Author</h1>
                <div className="text-gray-500 text-sm">{rssData.author}</div>
            </div>}
            <RssFrequency rss={rssData} />
            <RssCreated rss={rssData} />
            <RssBundles rss={rssData} />
        </div >
    )
}