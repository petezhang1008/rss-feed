import ManagementHeader from "@/app/components/management/header/header";
import FeedHeader from "../components/feed-header";
import FeedContent from "../components/content/content";

export default async function Feed({ params }: { params: { feedId: string } }) {
    const data = await params
    console.log(data)

    return (
        <div className="flex flex-col size-full">
            <ManagementHeader>
                <FeedHeader />
            </ManagementHeader>
            <div className="p-4 gap-4 flex flex-col">
                <FeedContent />
            </div>
        </div>
    )
}


