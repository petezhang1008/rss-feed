import { PrismaClient } from "@prisma/client"
import { CategoryModel } from "../category-model";
import { injectable, inject } from "inversify";
import { Category } from "@/types/model";
import { PrismaSymbol } from "@/lib/prisma";


@injectable()
export class CategoryModelImpl implements CategoryModel {
    constructor(
        @inject(PrismaSymbol)
        private prisma: PrismaClient
    ) { }
    getCategories() {
        return this.prisma.category.findMany({
            include: {
                rssList: true
            },
            orderBy: {
                order: 'asc'
            }
        })
    }

    getCategoryById(id: string) {
        return this.prisma.category.findUnique({
            where: { id },
            include: {
                rssList: true
            }
        })
    }

    createCategory(category: Category) {
        return this.prisma.category.create({
            data: category
        })
    }
    updateCategory(category: Category) {
        return this.prisma.category.update({
            where: { id: category.id },
            data: category
        })
    }
    deleteCategory(id: string) {
        return this.prisma.category.delete({
            where: { id }
        })
    }
}

