import Image from "next/image"
import React from "react"

export default function Home() {
    return (
        <section id="home" className="w-full h-screen grid place-items-center">
            <Image
                src={"/media/home-gradient.svg"}
                width={100}
                height={100}
                alt="Home Background"
                className="object-cover w-full h-full absolute z-0"
            />
            <h1 className="z-10 text-[100px] font-tostada">Home</h1>
        </section>
    )
}
