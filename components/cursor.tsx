"use client"
import { motion, useMotionValue, useTransform } from "framer-motion"
import React, { useEffect } from "react"

type CursorProps = {}

export default function Cursor({}: CursorProps) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouseX.set(event.clientX)
            mouseY.set(event.clientY)
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [mouseX, mouseY])

    // Adjust the following values for smoother animation
    const smoothX = useTransform(mouseX, (value) => value - 10)
    const smoothY = useTransform(mouseY, (value) => value - 10)

    return (
        <motion.div
            className="bg-gray-400 w-5 h-5 rounded-full fixed pointer-events-none"
            style={{
                x: smoothX,
                y: smoothY,
            }}
            transition={{
                type: "spring",
                stiffness: 300, // Decrease stiffness for smoother motion
                damping: 30, // Adjust damping to reduce oscillation
            }}
        />
    )
}
