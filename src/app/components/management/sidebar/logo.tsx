import Link from "next/link"
import Logo from "../../../assets/images/logo_white.svg"
import { RouterName } from "@/enums/router"

export default function ManagementSidebarLogo() {
    return (
        <div className="management-sidebar-logo flex items-center gap-2 h-12 ">
            <Link href={RouterName.MY_FEEDS}>
                <Logo height={160} />
            </Link>
        </div>
    )
}