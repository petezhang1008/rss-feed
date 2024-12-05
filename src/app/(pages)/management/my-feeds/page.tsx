import ManagementHeader from "@/app/components/management/header/header";

export default function MyFeed() {
    return (
        <div className="flex flex-col size-full">
            <ManagementHeader>
                <h1>MyFeed</h1>
            </ManagementHeader>
            <div className="bg-blue-50">
                content
            </div>
        </div>
    )
}