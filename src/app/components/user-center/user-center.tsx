'use client'
import { logoutAction } from "@/app/lib/auth-action"
import { RouterName } from "@/enums/router"
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
            <Link href={RouterName.FEEDS} className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4">My Feeds</Link>
            <Link href={RouterName.SETTINGS} className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4">Settings</Link>
            <hr />
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4" onClick={handleLogout}>Logout</div>
        </div>
    )
}