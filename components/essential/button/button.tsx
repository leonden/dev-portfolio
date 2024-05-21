"use client"
import { motion } from "framer-motion"
import React from "react"
import * as cfg from "./config"

type ButtonProps = {
    children: string | React.ReactNode
    variant?: "primary" | "secondary"
    className?: string
}

/**
 * A generic button component.
 *
 * @param {string} variant - The button variant. Either `primary` or `secondary`.
 * @param {string} content - The button content.
 * @param {string} className - Additional classes to be added to the button.
 * @returns {React.ReactElement} The button component.
 */
export default function Button({
    children,
    variant = "primary",
    className,
}: ButtonProps) {
    return variant === "primary" ? (
        <motion.button
            whileHover={cfg.hover}
            whileTap={cfg.tap}
            transition={cfg.transition}
            className={
                "hover:cursor-pointer  bg-black text-white shadow-md rounded-md px-3 py-2 " +
                className
            }
        >
            {children}
        </motion.button>
    ) : (
        <motion.button
            whileHover={cfg.hover}
            whileTap={cfg.tap}
            transition={cfg.transition}
            className={
                "hover:cursor-pointer shadow-md border-s-slate-500 rounded-md px-3 py-2 " +
                className
            }
        >
            {children}
        </motion.button>
    )
}
