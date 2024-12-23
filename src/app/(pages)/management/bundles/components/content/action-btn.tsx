'use client'
import TippyPopover from "@/app/components/common/tippy-popover";
import { Bundle } from "@/types/model";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Actions from "./actions";

export default function ActionBtn({ bundle }: { bundle: Bundle }) {
    return (
        <TippyPopover content={<div><Actions bundle={bundle} /></div>}>
            <div>
                <DotsHorizontalIcon className='hover:bg-gray-200 rounded-md p-1 size-6'></DotsHorizontalIcon>
            </div>
        </TippyPopover>
    )
}