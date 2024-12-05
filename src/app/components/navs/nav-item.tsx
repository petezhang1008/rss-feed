export default function NavItem() {
    return (
        <div className="py-2 px-3 flex gap-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <span>⭕️</span>
            <p className="truncate">关注</p>
        </div>
    )
}