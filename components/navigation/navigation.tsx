"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import React, { SetStateAction, useState } from "react"
import * as cfg from "./config"
import "./config.css"

export default function Navigation() {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <>
            <MobileNavButton setNavOpen={setNavOpen} />
            <NavButton setNavOpen={setNavOpen} />
            <motion.nav
                initial="closed"
                animate={navOpen ? "opened" : "closed"}
                className="flex justify-between z-50"
            >
                <motion.div
                    variants={cfg.mobileMenuVariant}
                    className="fixed h-screen shadow-md lg:h-[60vh] w-full flex flex-col  bg-white left-0 top-0 z-50 lg:px-6"
                >
                    <motion.button
                        variants={cfg.fadeInVariant}
                        onClick={() => setNavOpen(false)}
                        className="self-end bg-transparent text-lg text-black ml-0 mr-[45px] mt-[45px] py-1 px-3 mb-0 border-[none] hover:cursor-pointer"
                    >
                        close
                    </motion.button>
                    <motion.ul
                        variants={cfg.ulVariant}
                        className="lg:font-bold w-full text-center"
                    >
                        {cfg.navItems.map((item) => (
                            <motion.li
                                key={item.id}
                                whileTap={{ scale: 0.95 }}
                                className="overflow-y-hidden select-none mx-0 my-5 hover:cursor-pointer"
                            >
                                <Link
                                    href={item.url}
                                    onClick={() => setNavOpen(false)}
                                >
                                    <motion.div
                                        variants={cfg.liVariant}
                                        className="capitalize text-[34px]"
                                    >
                                        <p className="text-center lg:text-left lg:text-9xl lg:pl-5 nav-item">
                                            {item.title}
                                        </p>
                                    </motion.div>
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.nav>
        </>
    )
}

type NavButtonProps = {
    setNavOpen: (value: SetStateAction<boolean>) => void
}
function MobileNavButton({ setNavOpen }: NavButtonProps) {
    return (
        <div className="lg:hidden fixed w-screen grid z-40  place-items-center bottom-0">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                }}
                variants={cfg.hideNavItemsVariant}
                onClick={() => setNavOpen(true)}
                className="hover:cursor-pointer mb-7 w-[55px] h-[55px] bg-[#00000070] backdrop-invert rounded-full shadow-md"
            >
                <div className="w-1/2 h-[2px] bg-white my-2 mx-auto" />
                <div className="w-1/2 h-[2px] bg-white my-2 mx-auto" />
            </motion.button>
        </div>
    )
}

function NavButton({ setNavOpen }: NavButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
            }}
            variants={cfg.hideNavItemsVariant}
            onClick={() => setNavOpen(true)}
            className="hidden lg:block hover:cursor-pointer fixed right-[45px] top-[35px] z-40 w-[55px] h-[55px] backdrop-invert bg-[#00000070] rounded-full shadow-md"
        >
            <div className="w-1/2 h-[2px] bg-white my-2 mx-auto" />
            <div className="w-1/2 h-[2px] bg-white my-2 mx-auto" />
        </motion.button>
    )
}
