import { redirect } from "next/navigation";
import LoginPanel from "./components/login-panel";
import { auth } from "@/auth";
import HomeRoot from "@/app/components/root/home-root";

export default async function Login() {

    const session = await auth()
    if (session) {
        return redirect('/')
    }

    return (
        <HomeRoot>
            <div className="flex h-screen w-full items-center justify-center flex-col">
                <LoginPanel />
            </div>
        </HomeRoot>
    )
}