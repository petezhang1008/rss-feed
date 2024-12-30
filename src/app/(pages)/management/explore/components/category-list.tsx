import { CategoryWithRss } from "@/types/model";
import CategoryItem from "./category-item";

export default function CategoryList({ categories }: { categories: CategoryWithRss[] }) {
    return (
        <div className="flex gap-4">
            <div className="flex gap-4">
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </div>
        </div>
    )
}