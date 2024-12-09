import { redirect } from "next/navigation";
import LoginPanel from "./components/login-panel";
import { auth } from "@/auth";

export default async function Login() {

    const session = await auth()
    if (session) {
        return redirect('/')
    }

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <LoginPanel />
        </div>
    )
}