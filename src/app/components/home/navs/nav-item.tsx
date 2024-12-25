'use client'
import { RouterName } from "@/enums/router";
import { Category } from "@/types/model";
import { DotIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavItem({ nav }: { nav: Category }) {
    const searchParams = useSearchParams()
    const categoryId = searchParams.get('categoryId')
    return (
        <Link href={`${RouterName.HOME}?categoryId=${nav.id}`}>
            <div className={clsx("py-2 px-3 flex gap-2 rounded-md hover:bg-gray-100 cursor-pointer items-center", {
                "!text-primary font-bold bg-primary/10": categoryId === nav.id
            })}>
                <DotIcon className={clsx("size-4", {
                    "text-primary": categoryId === nav.id
                })} />
                <p className={clsx("truncate text-sm text-gray-700 font-medium", {
                    "!text-primary": categoryId === nav.id
                })}>{nav.name}</p>
            </div>
        </Link>
    )
}