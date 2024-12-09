'use client'
import { useSession } from 'next-auth/react';

export default function UserAvatar() {
    const { data: session } = useSession()
    return (
        <div className="avatar placeholder" >
            <div className="bg-neutral text-neutral-content w-8 rounded-full" >
                <span className="text-xs font-bold" > {session?.user?.email?.charAt(0).toUpperCase()} </span>
            </div>
        </div>
    )
}