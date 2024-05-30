import React from "react"
import { cn } from "@/lib/utils"

type TagProps = {
    children: string | React.ReactNode
    variant?: "primary" | "secondary" | "tertiary"
}

export default function Tag({ children, variant = "primary" }: TagProps) {
    return (
        <div
            className={cn(
                "px-2 py-1 rounded-3xl w-fit grid place-items-center h-fit cursor-pointer text-xs leading-1",
                variant === "primary" &&
                    "bg-gradient-to-r from-indigo-300 to-purple-400 origin-left text-white",
                variant === "secondary" && "bg-black text-white",
                variant === "tertiary" &&
                    "bg-white text-black border border-black"
            )}
        >
            {children}
        </div>
    )
}
