import HeaderLogo from "./logo";
import ManagementSidebarNavs from "./navs";
import ManagementSidebarStarred from "./starred";

export default function ManagementSidebar() {
    return (
        <div className="management-sidebar flex flex-col bg-[#012652] w-56 shrink-0 text-gray-100 gap-4">
            <HeaderLogo />
            <ManagementSidebarNavs />
            <ManagementSidebarStarred />
        </div>
    )
}