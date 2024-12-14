"use client"
import { useEffect, useState } from "react";

export default function BannerImage({ src, title, width = '100%', height = 'auto' }:
    { src: string, title?: string, width?: number | string, height?: number | string }) {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    function loadImage(src: string) {
        const img = new Image();
        img.referrerPolicy = 'no-referrer'
        img.src = src;
        img.onload = () => {
            setLoading(false)
        }
        img.onerror = () => {
            setError(true)
        }
    }

    useEffect(() => {
        if (src) {
            loadImage(src)
        }
    }, [src])

    return (
        <div className="size-full overflow-hidden shrink-0">
            {src && !error ? (
                loading ? (
                    <div className="bg-gray-50 size-full flex items-center justify-center">
                    </div>
                ) : (
                    <img
                        src={src}
                        alt={title}
                        width={width}
                        height={height}
                        referrerPolicy="no-referrer"
                    />
                )
            ) : null}
        </div>
    )
}