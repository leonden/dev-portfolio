"use client"
import React from "react"
import { motion } from "framer-motion"

type HeadingProps = {
    children: React.ReactNode | string
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    className: string
}

export default function Heading({ children, type, className }: HeadingProps) {
    const HeadingComponent = motion[type]

    return (
        <HeadingComponent
            className={className}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            {children}
        </HeadingComponent>
    )
}
