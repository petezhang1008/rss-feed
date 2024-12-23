import CategoryItem from "./category-item";

export default function SuggestionCategories() {
    return <div className="w-52">
        <p className="text-gray-500 px-1.5">Categories</p>
        <div className="flex flex-col gap-1 mt-4">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
        </div>
    </div>
}