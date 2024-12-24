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
                "text-primary font-bold": categoryId === nav.id
            })}>
                <DotIcon className={clsx("size-4", {
                    "text-primary": categoryId === nav.id
                })} />
                <p className="truncate">{nav.name}</p>
            </div>
        </Link>
    )
}