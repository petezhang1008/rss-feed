import { UserRssWithTaskSuccessCount } from "@/services/prisma/user-rss-service";
import { UserRssList } from "./user-rss-list";
import Link from "next/link";
import { RouterName } from "@/enums/router";

export default function UpdatedRssList({ rssList }: { rssList: UserRssWithTaskSuccessCount[] }) {
    return <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2 w-full">
        <h1 className="font-semibold no-wrap">
            Updated feeds in the last 24 hours
        </h1>
        <UserRssList rssList={rssList} ></UserRssList>
        <div className="mt-2">
            <Link href={RouterName.RSS_BUILDER}>
                <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7">
                    Subscribe more feeds
                </button>
            </Link>
        </div>
    </div>
}