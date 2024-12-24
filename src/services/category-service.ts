import { Category, CategoryWithRss } from "@/types/model"

export const CategoryService = Symbol('CategoryService')

export interface CategoryService {
    getCategories: () => Promise<CategoryWithRss[]>
    getCategoryById: (id: string) => Promise<CategoryWithRss | null>
    createCategory: (category: Category) => Promise<Category>
    updateCategory: (category: Category) => Promise<Category>
    deleteCategory: (id: string) => Promise<Category>
}