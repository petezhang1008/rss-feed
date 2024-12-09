import Link from "next/link"
import Logo from "../../../assets/images/logo.svg"

export default function HeaderLogo() {
    return (
        <div>
            <Link href="/">
                <Logo height={150} />
            </Link>
        </div>
    )
}