import LogoImage from "@/app/components/common/logo-image";
import { RssDetail } from "@/types/model";

export default function RssDetailHeader({ rssDetail }: { rssDetail: RssDetail }) {
    return <div className="flex gap-4 px-4 py-6 bg-white rounded-md shadow-sm justify-between items-center">
        <div className="flex items-center gap-4">
            <div className="avatar placeholder shrink-0">
                <div className="size-20">
                    <LogoImage src={rssDetail?.image} title={rssDetail?.title} />
                </div>
            </div>
            <div className="flex flex-col flex-grow overflow-hidden gap-2">
                <p className="text-xl font-semibold truncate">{rssDetail?.title}</p>
                <p className="text-xs line-clamp-3 text-neutral-500">{rssDetail?.description}</p>
            </div>
        </div>
        <div>
            <button className="btn btn-primary btn-sm btn-outline">Subscribe</button>
        </div>
    </div>
}