'use client';
import { useSearchParams } from "next/navigation"
import style from "../styles/iframe-preview.module.scss"
import React from "react";
import useIframeEvent from "../hooks/use-iframe-event";

export default function IframePreview() {
    const websiteLink = `/api/proxy/picker?link=${decodeURIComponent(useSearchParams().get('website_link') || '')}`;

    const iframeRef = useIframeEvent()
    
    return (
        <div className="h-full w-2/3">
            <iframe
                ref={iframeRef}
                className={style.iframePreview}
                sandbox="allow-same-origin allow-scripts"
                width='100%'
                height='100%'
                src={websiteLink}
            />
        </div>
    )
}