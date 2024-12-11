'use client'
import { useSession } from 'next-auth/react';
import TippyPopover from '../common/tippy-popover';
import UserCenter from './user-center';
import { Placement } from 'tippy.js';
export default function UserAvatar() {
    const { data: session } = useSession()
    const props = {
        placement: 'bottom-start' as Placement
    }
    return (
        <div className="avatar placeholder" >
            <TippyPopover content={<UserCenter />} props={props}>
                <div className="bg-neutral text-neutral-content size-8 rounded-full cursor-pointer flex items-center justify-center" >
                    <span className="text-xs font-bold" > {session?.user?.email?.charAt(0).toUpperCase()} </span>
                </div>
            </TippyPopover>
        </div>
    )
}