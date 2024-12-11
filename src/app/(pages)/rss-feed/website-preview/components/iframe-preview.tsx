'use client';
import style from "../styles/iframe-preview.module.scss"
import React from "react";
import useIframeEvent from "../hooks/use-iframe-event";
import useWebsiteLink from "../hooks/use-website-link";

export default function IframePreview() {
    const websiteLink = useWebsiteLink()
    const iframeRef = useIframeEvent()
    const iframeSrc = `/api/proxy/picker?link=${websiteLink}`;

    return (
        <div className="h-full w-full">
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