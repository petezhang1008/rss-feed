import Link from "next/link";
import MyFeedSearchInput from "./search-input";
import { RouterName } from "@/enums/router";

export default function FeedsHeader() {
    return (
        <div className="h-12 flex justify-between items-center">
            <MyFeedSearchInput />
        </div>
    )
}