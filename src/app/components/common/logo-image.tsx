'use client'

import { useEffect, useState } from "react"

export default function LogoImage({ src, title }: { src: string | null, title: string }) {
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
        <div className="size-full rounded-full items-center justify-center flex overflow-hidden border border-neutral-100">
            {src && !error ? (
                loading ? (
                    <div className="bg-gray-50 size-full flex items-center justify-center">
                    </div>
                ) : (
                    <img
                        src={src}
                        alt={title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                    />
                )
            ) : (
                <div className="bg-neutral text-neutral-content size-full flex items-center justify-center">
                    <span className="font-bold whitespace-nowrap">{title?.slice(0, 1)}</span>
                </div>
            )}
        </div>
    )
}