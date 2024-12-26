import { redirect } from "next/navigation";
import LoginPanel from "./components/login-panel";
import { auth } from "@/auth";
import Header from "@/app/components/home/header/header";

export default async function Login() {

    const session = await auth()
    if (session) {
        return redirect('/')
    }

    return (
        <div className="flex flex-col size-full">
            <Header />
            <div className="flex h-screen w-full items-center justify-center flex-col">
                <LoginPanel />
            </div>
        </div>
    )
}