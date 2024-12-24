import { Category, CategoryWithRss } from "@/types/model"

export const CategoryModel = Symbol.for('CategoryModel')

export interface CategoryModel {
    getCategories: () => Promise<CategoryWithRss[]>
    getCategoryById: (id: string) => Promise<CategoryWithRss | null>
    createCategory: (category: Category) => Promise<Category>
    updateCategory: (category: Category) => Promise<Category>
    deleteCategory: (id: string) => Promise<Category>
}
