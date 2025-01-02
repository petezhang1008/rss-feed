import { auth } from "@/auth"
import { SessionProvider } from "next-auth/react"
import Header from "../home/header/header"

export default async function HomeRoot({ children }: { children: React.ReactNode }) {
    const session = await auth()
    return (
        <SessionProvider session={session}>
            <div className="flex flex-col size-full">
                <Header />
                <div className="flex size-full flex-col overflow-auto grow">
                    {children}
                </div>
            </div>
        </SessionProvider>
    )
}