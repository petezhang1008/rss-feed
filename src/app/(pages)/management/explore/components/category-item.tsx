'use client'
import { RouterName } from "@/enums/router";
import { CategoryWithRss } from "@/types/model";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CategoryItem({ category }: { category: CategoryWithRss }) {
    const searchParams = useSearchParams()
    const categoryId = searchParams.get('categoryId')
    const isSelected = categoryId === category.id
    return (
        <Link href={`${RouterName.EXPLORE}?categoryId=${category.id}`}>
            <div className={clsx("flex items-center justify-between hover:bg-primary/20 rounded-md p-1.5 cursor-pointer bg-primary/5 px-4", isSelected && "bg-gray-100 text-primary")}>
                <span className={clsx("text-sm text-gray-600", isSelected && "text-primary font-semibold")}>{category.name}</span>
            </div>
        </Link>
    )
}