'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RouterName } from "@/enums/router";

export default function Management() {
    const router = useRouter();
    useEffect(() => {
        router.push(RouterName.MY_FEEDS);
    }, []);
    return (
        <div> </div>
    )
}