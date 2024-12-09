import UserAvatar from '../../user-center/user-avatar';
export default function ManagementHeader({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="management-header bg-white h-14 w-full justify-between items-center px-4 flex shrink-0 border-b border-gray-100 gap-4">
            <div className="flex-1"> {children} </div>
            <div className="flex items-center gap-4">
                <UserAvatar />
            </div>
        </div>
    )
}