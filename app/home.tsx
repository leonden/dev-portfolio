"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import Paragraph from "@/components/essential/paragraph"
import c from "@/content/en.json"

export default function Home() {
    return (
        <section id="home" className="w-full h-screen grid place-items-center">
            <Image
                src={"/media/home-gradient.svg"}
                width={100}
                height={100}
                alt="Home Background"
                className="object-cover w-full h-full lg:h-fit absolute z-0 select-none"
            />
            <div className="px-3 z-10">
                <motion.h1
                    className="text-6xl font-tostada max-w-4/5 2xl:text-8xl"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 3,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    {c.title}.
                </motion.h1>
                <Paragraph>{c.subtitle}</Paragraph>
            </div>
        </section>
    )
}
