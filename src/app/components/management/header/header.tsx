export default function ManagementHeader({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="management-header bg-white h-12 w-full justify-between items-center px-4 flex shrink-0 border-b border-gray-100">
            <div> {children} </div>
            <div className="flex items-center gap-4">
                <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                        <span className="text-xs">UI</span>
                    </div>
                </div>
            </div>
        </div>
    )
}