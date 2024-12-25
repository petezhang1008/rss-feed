import ManagementHeader from "@/app/components/management/header/header";

export default function Explore() {

    return (
        <div className="flex flex-col size-full">
            <ManagementHeader>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Explore</h1>
                </div>
            </ManagementHeader>
            <div className="p-4 gap-4 flex flex-col">
                Explore
            </div>
        </div>
    )
}