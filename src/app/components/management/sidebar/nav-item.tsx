export default function SidebarNavItem({ IconComponent, label }: Readonly<{
    IconComponent: React.ElementType,
    label: string
}>) {
    return (
        <>
            <IconComponent></IconComponent>
            <span>{label}</span>
        </>
    )
}