import NavItem from "./nav-item";

export default function Navs() {
    return (
        <div className="w-48">
            <div className="sticky top-4 flex flex-col w-full bg-white rounded shadow-sm p-2 h-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <NavItem key={item} />
                ))}
            </div>
        </div>
    )
}