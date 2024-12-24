'use client'
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, children }: { href: string, children: React.ReactNode }) {
    const pathname = usePathname()
    return <Link href={href} className={clsx("cursor-pointer px-4 py-2 rounded-md  hover:bg-gray-100", pathname === href && "bg-gray-100 text-primary font-bold")}>{children}</Link>
}