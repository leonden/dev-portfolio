"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

type ParagraphProps = {
    children: string | React.ReactNode
    className?: string
}

export default function Paragraph({ children, className }: ParagraphProps) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <motion.p
            className={className ? className : ""}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0, 0.71, 0.75, 1.01],
            }}
            ref={ref}
        >
            {children}
        </motion.p>
    )
}
