import React from "react"
import Link from "next/link"
import Image from "next/image"
import c from "../content/en.json"

export default function Contact() {
    return (
        <section
            id="contact"
            className="w-full h-screen px-3 grid place-items-center"
        >
            <Image
                src={"/media/contact-gradient.svg"}
                width={100}
                height={100}
                alt="Contact Background"
                className="object-cover w-full h-full lg:h-fit absolute z-0 select-none"
            />
            <div className="flex flex-col gap-24 z-10">
                <h2 className="text-6xl xl:text-9xl font-bold">
                    {c.pages.contact.title}
                </h2>
                <p className="text-4xl">
                    {c.pages.contact.description}
                    <Link href={"#home"} className="underline">
                        <strong>
                            <i>I feel you</i>
                        </strong>
                    </Link>
                </p>
                <ul>
                    {c.socials.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} className="text-4xl underline">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
