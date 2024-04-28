"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

type HeadingProps = {
    children: React.ReactNode | string
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    className?: string
}

export default function Heading({ children, type, className }: HeadingProps) {
    const HeadingComponent = motion[type]
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <HeadingComponent
            className={className}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={ref}
        >
            {children}
        </HeadingComponent>
    )
}
