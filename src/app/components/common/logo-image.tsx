'use client'

import { useEffect, useState } from "react"

export default function LogoImage({ src, title, width = 40, height = 40 }: { src: string | null, title: string, width: number, height: number }) {
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
        <div className="size-full rounded-lg border border-gray-200 overflow-hidden">
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
            ) : (
                <div className="bg-neutral text-neutral-content size-full flex items-center justify-center">
                    <span className="text-md font-semibold whitespace-nowrap">{title?.slice(0, 2)}</span>
                </div>
            )}
        </div>
    )
}