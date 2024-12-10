'use client'
import { RouterName } from "@/enums/router";
import { Bundle } from "@prisma/client";
import { DotIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavItem({ bundle }: { bundle: Bundle }) {
    const searchParams = useSearchParams()
    const bundleId = searchParams.get('bundleId')
    return (
        <Link href={`${RouterName.HOME}?bundleId=${bundle.id}`}>
            <div className={clsx("py-2 px-3 flex gap-2 rounded-md hover:bg-gray-100 cursor-pointer items-center", {
                "text-[#178f78] font-bold": bundleId === bundle.id
            })}>
                <DotIcon className={clsx("size-4", {
                    "text-[#178f78]": bundleId === bundle.id
                })} />
                <p className="truncate">{bundle.title}</p>
            </div>
        </Link>
    )
}