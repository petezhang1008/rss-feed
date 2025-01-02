import RegisterPanel from "./components/register-panel";
import HomeRoot from "@/app/components/root/home-root";

export default function RegisterPage() {
    return (
        <HomeRoot>
            <div className="flex h-screen w-full items-center justify-center">
                <RegisterPanel />
            </div>
        </HomeRoot>
    )
}