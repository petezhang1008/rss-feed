'use client'
import LogoImage from "@/app/components/common/logo-image";
import { RssDetail } from "@/types/model";
import { useSubscribe } from "../hooks/client/use-subscribe";
import useToast from "@/app/hooks/use-toast";
import { RouterName } from "@/enums/router";
import { useRouter } from "next/navigation";

export default function RssDetailHeader({ rssDetail }: { rssDetail: RssDetail }) {
    const { subscribe } = useSubscribe()
    const { toast } = useToast()
    const router = useRouter()

    function handleSubscribe() {
        subscribe(rssDetail.id).then((userRss) => {
            toast.success('Subscribe successfully')
            router.push(`${RouterName.RSS_FEEDS}/${userRss.id}`)
        }).catch((error) => {
            toast.error(error.message)
        })
    }
    return <div className="flex gap-4 px-4 py-6 bg-white flex-1 rounded-md shadow-sm justify-between items-center">
        <div className="flex items-center gap-4 overflow-hidden">
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
            <button onClick={handleSubscribe} className="btn btn-primary btn-sm btn-outline">Subscribe</button>
        </div>
    </div>
}