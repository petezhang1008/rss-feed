import Logo from "@/app/assets/images/logo_white.svg"
import { RouterName } from "@/enums/router"
import Link from "next/link"

export default function FooterLogo() {
    return (
        <div className="flex items-center justify-center opacity-70 h-12">
            <Link href={RouterName.HOME} className="flex items-center">
                <Logo height={160} />
            </Link>
        </div>
    )
}