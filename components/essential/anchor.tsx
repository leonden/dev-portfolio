"use client"
import React, { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type AnchorProps = {
    children: string | React.ReactNode
    url: string
    type?: "color" | "inherit"
    className?: string
}

export default function Anchor({
    children,
    url,
    type = "color",
    className,
}: AnchorProps) {
    const [hovered, setHovered] = useState(false)

    return (
        <span
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={className}
        >
            <Link
                href={url}
                className={cn(
                    "bg-gradient-to-r from-indigo-300 to-purple-400 inline-block bg-clip-text cursor-pointer text-transparent",
                    type === "inherit" && "text-inherit"
                )}
            >
                {children}
                <div
                    className={cn(
                        "h-[1px] bg-gradient-to-r from-indigo-300 to-purple-400 transition-all duration-300 ease-in-out",
                        hovered ? "w-full" : "w-0",
                        type === "inherit" &&
                            "bg-gradient-to-r from-black to-black"
                    )}
                />
            </Link>
        </span>
    )
}
