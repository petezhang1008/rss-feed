import { Bundle } from "@prisma/client";
import NavItem from "./nav-item";

export default function Navs({ navs }: { navs: Bundle[] }) {
    return (
        <div className="w-48">
            <div className="sticky top-4 flex flex-col w-full bg-white rounded shadow-sm p-2 h-auto gap-0.5">
                {navs.map((bundle) => (
                    <NavItem key={bundle.id} bundle={bundle} />
                ))}
            </div>
        </div>
    )
}