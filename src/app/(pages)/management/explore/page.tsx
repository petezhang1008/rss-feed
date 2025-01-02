import ExploreContent from "./components/content";
import { useCategory } from "@/app/components/home/hooks/server/use-category";
import ManagementRoot from "@/app/components/root/management-root";

export default async function Explore() {
    const { getCategories } = useCategory()
    const categories = await getCategories()
    return (
        <ManagementRoot header={
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Explore</h1>
            </div>
        }>
            <ExploreContent categories={categories} />
        </ManagementRoot>
    )
}