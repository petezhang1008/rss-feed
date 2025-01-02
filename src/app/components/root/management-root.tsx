import ManagementHeader from "@/app/components/management/header/header";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

export default async function ManagementRoot({ children, header }: { children: React.ReactNode, header: React.ReactNode }) {
    const session = await auth()
    return (
        <SessionProvider session={session}>
            <div className="flex flex-col size-full overflow-hidden">
                <ManagementHeader>
                    {header}
                </ManagementHeader>
                <div className="p-4 gap-4 flex flex-col overflow-y-auto size-full">
                    {children}
                </div>
            </div>
        </SessionProvider>
    )
}