"use client"
import React, { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type AnchorProps = {
    children: string | React.ReactNode
    url: string
}

export default function Anchor({ children, url }: AnchorProps) {
    const [hovered, setHovered] = useState(false)

    return (
        <span
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link
                href={url}
                className={
                    "bg-gradient-to-r from-indigo-300 to-purple-400 inline-block bg-clip-text cursor-pointer text-transparent"
                }
            >
                {children}
                <div
                    className={cn(
                        "h-[1px] bg-gradient-to-r from-indigo-300 to-purple-400 transition-all duration-300 ease-in-out",
                        hovered ? "w-full" : "w-0"
                    )}
                />
            </Link>
        </span>
    )
}
