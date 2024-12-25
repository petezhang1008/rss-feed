'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RouterName } from "@/enums/router";
import Loading from "./loading";

export default function Management() {
    const router = useRouter();
    useEffect(() => {
        router.push(RouterName.MANAGEMENT_HOME);
    }, []);

    return <Loading></Loading>
}