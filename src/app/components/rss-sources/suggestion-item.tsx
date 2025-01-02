import LogoImage from "@/app/components/common/logo-image";
import { Rss } from "@/types/model";

export default function SuggestionItem({ rss }: { rss: Rss }) {
    return <div className="flex items-center text-sm hover:bg-gray-50 rounded-md p-4 cursor-pointer border border-gray-200 h-20 gap-2 bg-white">
        <div className="size-10 shrink-0">
            <LogoImage src={rss.image} title={rss.title!} />
        </div>
        <div className="flex flex-col gap-1 overflow-hidden">
            <p className="text-gray-700 font-semibold truncate">{rss.title}</p>
        </div>
    </div>
}