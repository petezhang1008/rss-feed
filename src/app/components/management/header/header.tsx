export default function ManagementHeader({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="management-header bg-white h-12 w-full justify-between items-center px-4 flex shrink-0 border-b border-gray-100">
            <div> {children} </div>
            <div className="flex items-center gap-4">
                <div className="text-sm w-8 h-8 rounded-full bg-orange-400 text-white font-bold flex items-center justify-center">P</div>
            </div>
        </div>
    )
}