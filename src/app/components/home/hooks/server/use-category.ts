import { injectService } from "@/inversify.config"
import { CategoryService } from "@/services/category-service"

export const useCategory = () => {
    const categoryService = injectService<CategoryService>(CategoryService)

    function getCategories() {
        return categoryService.getCategories()
    }

    function getCategoryById(id: string) {
        return categoryService.getCategoryById(id)
    }

    return {
        getCategories,
        getCategoryById
    }
}