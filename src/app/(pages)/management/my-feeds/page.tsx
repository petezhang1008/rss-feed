import ManagementHeader from "@/app/components/management/header/header";
import FeedsHeader from "./components/header/feeds-header";
import MyFeedContent from "./components/content/content";

export default function MyFeed() {
    return (
        <div className="flex flex-col size-full">
            <ManagementHeader>
                <h1>MyFeed</h1>
            </ManagementHeader>
            <div className="bg-blue-50 p-4 gap-4 flex flex-col">
                <FeedsHeader />
                <MyFeedContent />
            </div>
        </div>
    )
}