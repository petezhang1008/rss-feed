import { RouterName } from "@/enums/router";
import NavItem from "./nav-item";

const NAVS = [
    { href: RouterName.HOME, label: 'Home' },
    { href: RouterName.RSS_SOURCES, label: 'Rss Sources' },
    { href: RouterName.FEEDS, label: 'Feeds' },
    { href: RouterName.BLOG, label: 'Blog' }
]

export default function HeaderNavs() {
    return (
        <div className="flex items-center gap-4">
            {NAVS.map((nav) => (
                <NavItem key={nav.href} href={nav.href}>{nav.label}</NavItem>
            ))}
        </div>
    )
}