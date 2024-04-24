"use client"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="w-full flex justify-center">
            <div className="flex gap-2">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                    }}
                    className="fixed top-5 right-5 z-50 bg-black p-2 rounded-full w-10 h-10"
                    onClick={toggleMenu}
                />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <nav className="fixed top-20 right-5 text-right text-xl">
                        <ul>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Link href={"#home"}>
                                    <li className="p-1">Home</li>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <Link href={"#about"}>
                                    <li className="p-1">About</li>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Link href={"#work"}>
                                    <li className="p-1">Work</li>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Link href={"#contact"}>
                                    <li className="p-1">Contact</li>
                                </Link>
                            </motion.div>
                        </ul>
                    </nav>
                )}
            </AnimatePresence>
        </div>
    )
}
