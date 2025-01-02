import { CategoryWithRss } from "@/types/model"

export default function useSuggestRss() {
    function getSuggestRss(categoryId: string, categories: CategoryWithRss[]) {
        if (categoryId) {
            const category = categories.find((category) => category.id === categoryId)
            return category?.rssList
        }
        return categories.flatMap((category) => category.rssList)
    }
    return { getSuggestRss }
}