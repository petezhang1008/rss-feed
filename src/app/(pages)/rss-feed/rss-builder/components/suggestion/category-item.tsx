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
        <Link href={`${RouterName.RSS_BUILDER}?categoryId=${category.id}`}>
            <div className={clsx("flex items-center justify-between text-sm hover:bg-gray-50 rounded-md p-1.5 cursor-pointer", isSelected && "bg-gray-100 text-primary")}>
                <span className={clsx("font-semibold", isSelected && "text-primary")}>{category.name}</span>
                <span className={clsx("text-gray-400 font-semibold bg-gray-100 rounded-md py-1 px-1.5 text-xs", isSelected && "text-primary bg-primary/10")} >{category.rssList.length}</span>
            </div>
        </Link>
    )
}