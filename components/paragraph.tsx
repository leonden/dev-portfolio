"use client"
import React from "react"
import { motion } from "framer-motion"

type ParagraphProps = {
    children: React.ReactNode | string
    className: string
}

export default function Paragraph({ children, className }: ParagraphProps) {
    return (
        <motion.p
            className={className}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.9, 1.01],
            }}
        >
            {children}
        </motion.p>
    )
}
