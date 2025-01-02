import Link from "next/link";

export const links = [
    { title: "About EasyRSS", href: "/about" },
    { title: "Pricing", href: "/pricing" },
    { title: "Help", href: "/help" },
    { title: "Contact", href: "/contact" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
]

export default function FooterLinks() {
    return (
        <div className="flex items-center justify-center text-neutral-300">
            {links.map((link) => (
                <Link
                    href={link.href}
                    key={link.href}
                    className="hover:text-neutral-500 border-r border-neutral-700 px-4 leading-none last:border-r-0">
                    <p className="text-sm text-neutral-500">
                        {link.title}
                    </p>
                </Link>
            ))}
        </div>
    )
}