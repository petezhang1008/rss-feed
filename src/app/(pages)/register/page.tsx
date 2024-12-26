import Header from "@/app/components/home/header/header";
import RegisterPanel from "./components/register-panel";

export default function RegisterPage() {
    return (
        <div className="flex flex-col size-full">
            <Header />
            <div className="flex h-screen w-full items-center justify-center">
                <RegisterPanel />
            </div>
        </div>
    )
}