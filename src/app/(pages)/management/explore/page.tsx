import ManagementHeader from "@/app/components/management/header/header";
import ExploreContent from "./components/content";
import { useCategory } from "@/app/components/home/hooks/server/use-category";

export default async function Explore() {
    const { getCategories } = useCategory()
    const categories = await getCategories()
    return (
        <div className="flex flex-col size-full">
            <ManagementHeader>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Explore</h1>
                </div>
            </ManagementHeader>
            <div className="p-4 gap-4 flex flex-col size-full overflow-y-auto">
                <ExploreContent categories={categories} />
            </div>
        </div>
    )
}