import FeedsHeader from "./components/header/feeds-header";
import MyFeedContent from "./components/content/content";
import useMyRss from "./hooks/use-my-feeds";
import { RouterName } from "@/enums/router";
import Link from "next/link";
import NoData from "./components/content/no-data";
import { auth } from "@/auth";
import ManagementRoot from "@/app/components/root/management-root";

export default async function MyFeedList() {
    const { queryUserRssList } = useMyRss()
    const session = await auth()
    const res = await queryUserRssList({
        page: 1,
        pageSize: 90,
        userId: session?.user?.id!
    })

    return (
        <ManagementRoot header={
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">My RSS
                    {res.total > 0 && <span className="text-gray-500 ml-1.5">({res.total})</span>}</h1>
                <Link href={RouterName.RSS_BUILDER}>
                    <button className="btn btn-sm btn-primary">New RSS</button>
                </Link>
            </div>
        }>
            {res.total === 0 ? <NoData /> :
                <>
                    <FeedsHeader />
                    <MyFeedContent rssList={res.result} />
                </>
            }
        </ManagementRoot>
    )
}