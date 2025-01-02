import { auth } from "@/auth";
import Content from "./components/content";
import { useUserFeed } from "./hooks/server/use-user-feed";
import { useUserRss } from "./hooks/server/use-user-rss";
import ManagementRoot from "@/app/components/root/management-root";

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
        <ManagementRoot header={
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Home</h1>
            </div>
        }>
            <Content paginationFeeds={res} userRssList={userRssList} />
        </ManagementRoot>
    )
}