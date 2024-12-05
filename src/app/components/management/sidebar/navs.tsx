'use client'
import Link from "next/link"

const NAVS = [
    {
        name: "MyFeed",
        href: "/management/my-feeds",
    },
    {
        name: "Bundles",
        href: "/management/bundles",
    },
    {
        name: "Explore",
        href: "/management/explore",
    },
]

export default function ManagementSidebarNavs() {
    return (
        <div className="management-sidebar-navs flex flex-col gap-3 p-2">
            {
                NAVS.map((nav) => (
                    <div className="rounded hover:bg-blue-800 p-2 cursor-pointer">
                        <Link href={nav.href} key={nav.name}>
                            {nav.name}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}