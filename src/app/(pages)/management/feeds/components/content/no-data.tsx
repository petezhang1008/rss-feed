'use client'
import NoDataImage from "@/app/assets/images/bundle-not-found.svg"
import { RouterName } from "@/enums/router"
import Link from "next/link"

export default function NoData() {

    return <div className="flex flex-col items-center justify-center flex-col gap-8 size-full">
        <div>
            <NoDataImage alt="no-data" className="opacity-70" />
        </div>
        <div className="text-center text-gray-500 flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-semibold leading-8 text-blue-600 w-96 text-center">Use RSS to get the latest news from your favorite websites</h1>
            <Link href={RouterName.RSS_BUILDER}>
                <button className="bg-primary text-white px-4 py-2 rounded-md">Create New RSS</button>
            </Link>
        </div>
    </div>
}