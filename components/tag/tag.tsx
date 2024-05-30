"use client"
import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import * as cfg from "./config"

type TagProps = {
    children: string | React.ReactNode
    variant?: "primary" | "secondary" | "tertiary"
    size?: "sm" | "md" | "lg"
}

export default function Tag({
    children,
    variant = "primary",
    size = "md",
}: TagProps) {
    return (
        <motion.button
            whileHover={cfg.hover}
            whileTap={cfg.tap}
            transition={cfg.transition}
            className={cn(
                "rounded-3xl w-fit grid place-items-center h-fit cursor-pointer",
                size === "sm" && "px-2 py-1 text-xs leading-1",
                size === "md" && "px-3 py-2 text-sm leading-2",
                size === "lg" && "px-4 py-3 text-lg leading-3 font-bold",
                variant === "primary" &&
                    "bg-gradient-to-r from-indigo-300 to-purple-400 origin-left text-white",
                variant === "secondary" && "bg-black text-white",
                variant === "tertiary" &&
                    "bg-white text-black border border-black"
            )}
        >
            {children}
        </motion.button>
    )
}
