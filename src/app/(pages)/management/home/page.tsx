import ManagementHeader from "@/app/components/management/header/header";
import { auth } from "@/auth";
import Content from "./components/content";
import { useUserFeed } from "./hooks/server/use-user-feed";
import { useUserRss } from "./hooks/server/use-user-rss";

export default async function MyFeedList() {
    const session = await auth()
    const { getUserFeeds } = useUserFeed()
    const { getUserRssListWithTaskSuccessCount } = useUserRss()
    const userId = session?.user.id
    if (!userId) {
        return <div>No user</div>
    }
    const [res, userRssList] = await Promise.all([getUserFeeds(userId), getUserRssListWithTaskSuccessCount(userId)])
    return (
        <div className="flex flex-col size-full overflow-hidden">
            <ManagementHeader>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Home</h1>
                </div>
            </ManagementHeader>
            <div className="p-4 gap-4 flex flex-col overflow-y-auto size-full">
                <Content paginationFeeds={res} userRssList={userRssList} />
            </div>
        </div>
    )
}