'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Management() {
    const router = useRouter();
    useEffect(() => {
        router.push("/management/my-feeds");
    }, []);
    return (
        <div> </div>
    )
}