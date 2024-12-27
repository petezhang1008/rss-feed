import { Category } from "@/types/model"
import { CategoryService } from "../prisma/category-service";
import { CategoryModel } from "@/models/category-model";
import { injectable, inject } from "inversify";


@injectable()
export class CategoryServiceImpl implements CategoryService {
    constructor(
        @inject(CategoryModel)
        private categoryModel: CategoryModel
    ) { }
    getCategories() {
        return this.categoryModel.getCategories()
    }
    getCategoryById(id: string) {
        return this.categoryModel.getCategoryById(id)
    }
    createCategory(category: Category) {
        return this.categoryModel.createCategory(category)
    }
    updateCategory(category: Category) {
        return this.categoryModel.updateCategory(category)
    }
    deleteCategory(id: string) {
        return this.categoryModel.deleteCategory(id)
    }
}