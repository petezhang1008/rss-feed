'use client'
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";
import Actions from "./actions";
import TippyPopover from "@/app/components/common/tippy-popover";
import { useEventStop } from "@/app/hooks/use-event-stop";
import { UserRss } from "@/types/model";

export default function ActionBtn({ rss }: { rss: UserRss }) {
    const { stopEvent } = useEventStop()

    return (
        <div className="flex items-center gap-1 justify-center" onClick={stopEvent}>
            <TippyPopover content={<div><Actions rssData={rss} /></div>}>
                <span className='hover:bg-gray-200 rounded-md p-1 size-6'>
                    <DotsHorizontalIcon className='size-4 text-gray-600'></DotsHorizontalIcon>
                </span>
            </TippyPopover>
        </div>
    )
}