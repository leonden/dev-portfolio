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
                className="object-cover w-full h-full lg:h-fit absolute z-0 select-none"
            />
            <div className="px-3 z-10">
                <h1 className="text-6xl font-tostada max-w-4/5">
                    The Art of Creating.
                </h1>
                <p>by Leon Hochwimmer</p>
            </div>
        </section>
    )
}
