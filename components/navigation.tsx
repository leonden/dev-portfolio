"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"

const navItems = [
    {
        id: 0,
        title: "home",
        url: "#home",
    },
    {
        id: 1,
        title: "about",
        url: "#about",
    },
    {
        id: 2,
        title: "work",
        url: "#work",
    },
    {
        id: 3,
        title: "contact",
        url: "#contact",
    },
]

export default function Navigation() {
    const [navOpen, setNavOpen] = useState(false)

    const hideNavItemsVariant = {
        opened: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        closed: {
            opacity: 1,
            y: "0%",
            transition: {
                delay: 1.1,
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    }

    const mobileMenuVariant = {
        opened: {
            y: "0%",
            transition: {
                delay: 0.15,
                duration: 1.1,
                ease: [0.74, 0, 0.19, 1.02],
            },
        },
        closed: {
            y: "-100%",
            transition: {
                delay: 0.35,
                duration: 0.63,
                ease: [0.74, 0, 0.19, 1.02],
            },
        },
    }

    const fadeInVariant = {
        opened: {
            opacity: 1,
            transition: {
                delay: 1.2,
            },
        },
        closed: { opacity: 0 },
    }

    const ulVariant = {
        opened: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.18,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.06,
                staggerDirection: -1,
            },
        },
    }

    const liVariant = {
        opened: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.65,
                ease: "easeOut",
            },
        },
        closed: {
            opacity: 0,
            y: "100%",
            transition: {
                duration: 0.25,
                ease: "easeInOut",
            },
        },
    }

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                }}
                variants={hideNavItemsVariant}
                onClick={() => setNavOpen(true)}
                className="text-lg hover:cursor-pointer fixed right-[45px] top-[35px] z-40 py-1 px-3 bg-white rounded-3xl shadow-md"
            >
                menu
            </motion.button>
            <motion.nav
                initial="closed"
                animate={navOpen ? "opened" : "closed"}
                className="flex justify-between px-[45px] py-[35px] z-50 bg-white absolute"
            >
                <motion.div
                    variants={mobileMenuVariant}
                    className="fixed h-screen lg:h-[60vh] w-full flex flex-col  bg-white left-0 top-0 z-50 lg:px-6"
                >
                    <motion.button
                        variants={fadeInVariant}
                        onClick={() => setNavOpen(false)}
                        className="self-end bg-transparent text-lg text-black ml-0 mr-[45px] mt-[35px] py-1 px-3 mb-0 border-[none] hover:cursor-pointer"
                    >
                        close
                    </motion.button>
                    <motion.ul
                        variants={ulVariant}
                        className="lg:font-bold w-full text-center"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                onClick={() => setNavOpen(false)}
                            >
                                <motion.li
                                    whileTap={{ scale: 0.95 }}
                                    className="overflow-y-hidden select-none mx-0 my-5 hover:cursor-pointer"
                                >
                                    <motion.div
                                        variants={liVariant}
                                        className="capitalize text-[34px]"
                                    >
                                        <p className="text-center lg:text-left lg:text-9xl">
                                            {item.title}
                                        </p>
                                    </motion.div>
                                </motion.li>
                            </Link>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.nav>
        </>
    )
}
