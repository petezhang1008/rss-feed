import ManagementSidebar from "@/app/components/management/sidebar/sidebar";

export default function ManagementLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="management-container flex size-full">
            <ManagementSidebar />
            <div className="grow overflow-auto">
                {children}
            </div>
        </div>
    )
}