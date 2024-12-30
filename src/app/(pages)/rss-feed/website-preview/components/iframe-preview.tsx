'use client';
import style from "../styles/iframe-preview.module.scss"
import React, { useEffect, useRef, useState } from "react";
import FullPageLoading from "@/app/components/loading/full-page-loading";
import useIframeEvent from "../hooks/use-iframe-event";
import useWebsiteLink from "../hooks/use-website-link";

export default function IframePreview() {
    const { websiteLink } = useWebsiteLink()
    const { initIframeEvent, checkIframeLoaded } = useIframeEvent()
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const iframeSrc = `/api/proxy/picker?link=${websiteLink}`;
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        console.log('loading=>1', loading)
        checkIframeLoaded(iframeRef, () => {
            setLoading(false)
            initIframeEvent(iframeRef)
            console.log('loading=>2', loading)
        })
    }, [iframeRef])

    return (
        <div className="h-full w-full">{
            loading
        }
            {loading && <FullPageLoading />}
            <iframe
                ref={iframeRef}
                className={style.iframePreview}
                sandbox="allow-same-origin allow-scripts"
                width='100%'
                height='100%'
                src={iframeSrc}
            />
        </div>
    )
}
