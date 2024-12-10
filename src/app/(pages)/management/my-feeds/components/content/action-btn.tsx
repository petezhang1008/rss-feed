'use client'
import { DotsHorizontalIcon, CardStackPlusIcon } from "@radix-ui/react-icons";
import React, { useRef } from "react";
import Actions from "./actions";
import TippyPopover from "@/app/components/common/tippy-popover";
export default function ActionBtn() {
    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <div className="flex items-center gap-1 justify-center" onClick={handleClick}>
            <span className='hover:bg-gray-200 rounded-md p-1 size-6'>
                <CardStackPlusIcon className="size-4 text-gray-600" />
            </span>
            <TippyPopover content={<div><Actions /></div>}>
                <span className='hover:bg-gray-200 rounded-md p-1 size-6'>
                    <DotsHorizontalIcon className='size-4 text-gray-600'></DotsHorizontalIcon>
                </span>
            </TippyPopover>
        </div>
    )
}