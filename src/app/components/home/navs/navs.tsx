import { Category } from "@/types/model";
import NavItem from "./nav-item";

export default function Navs({ navs }: { navs: Category[] }) {
    return (
        <div className="w-48">
            <div className="sticky top-4 flex flex-col w-full bg-white rounded shadow-sm p-2 h-auto gap-0.5">
                {navs.map((nav) => (
                    <NavItem key={nav.id} nav={nav} />
                ))}
            </div>
        </div>
    )
}