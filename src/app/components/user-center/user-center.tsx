'use client'
import { logoutAction } from "@/app/lib/auth-action"
import { RouterName } from "@/enums/router"
import { ExitIcon, GearIcon, TokensIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import router from "next/router"

export default function UserCenter() {
    function handleLogout() {
        logoutAction().then(() => {
            router.push('/login')
        })
    }
    return (
        <div className="flex flex-col gap-2">
            <Link href={RouterName.MANAGEMENT_HOME} className="hover:bg-gray-200 rounded cursor-pointer py-2 px-2 flex items-center gap-2">
                <TokensIcon className="w-4 h-4" />
                <span>My Feeds</span>
            </Link>
            <Link href={RouterName.SETTINGS} className="hover:bg-gray-200 rounded cursor-pointer py-2 px-2 flex items-center gap-2">
                <GearIcon className="w-4 h-4" />
                <span>Settings</span>
            </Link>
            <hr />
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-2 flex items-center gap-2" onClick={handleLogout}>
                <ExitIcon className="w-4 h-4" />
                <span>Logout</span>
            </div>
        </div>
    )
}