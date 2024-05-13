"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

type AnchorProps = {
    children: string
    url: string
}

export default function Anchor({ children, url }: AnchorProps) {
    return (
        <span>
            <Link
                href={url}
                className={
                    "bg-gradient-to-r from-indigo-300 to-purple-400 inline-block bg-clip-text cursor-pointer text-transparent"
                }
            >
                {children}
            </Link>
        </span>
    )
}
