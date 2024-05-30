"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import * as cfg from "./config"
import { cn } from "@/lib/utils"

type ParagraphProps = {
    children: string | React.ReactNode
    className?: string
}

export default function Paragraph({ children, className }: ParagraphProps) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <motion.p
            className={cn("mt-5", className)}
            initial={cfg.initial}
            animate={inView ? cfg.animate : {}}
            transition={cfg.transition}
            ref={ref}
        >
            {children}
        </motion.p>
    )
}
