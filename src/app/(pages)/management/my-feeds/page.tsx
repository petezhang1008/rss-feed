import ManagementHeader from "@/app/components/management/header/header";
import FeedsHeader from "./components/header/feeds-header";
import MyFeedContent from "./components/content/content";
import useMyRss from "./hooks/use-my-feeds";
import { RouterName } from "@/enums/router";
import Link from "next/link";

export default async function MyFeedList() {
    const getMyRss = useMyRss()
    const res = await getMyRss.queryGenerateRssList({
        page: 1,
        pageSize: 50,
    })

    return (
        <div className="flex flex-col size-full overflow-hidden">
            <ManagementHeader>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">My Feeds ({res.total})</h1>
                    <Link href={RouterName.RSS_BUILDER}>
                        <button className="btn btn-sm btn-primary">New Feed</button>
                    </Link>
                </div>
            </ManagementHeader>
            <div className="p-4 gap-4 flex flex-col overflow-y-auto">
                <FeedsHeader />
                <MyFeedContent rssList={res.result} />
            </div>
        </div>
    )
}