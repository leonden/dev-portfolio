import React from "react"
import c from "../content/en.json"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full min-h-[50vh] bg-black text-white relative p-5 flex flex-col overflow-hidden">
            <p className="absolute text-9xl sm:text-[200px] lg:text-[300px] 2xl:text-[350px] font-bold text-neutral-900 z-0">
                {c.footer.slogan}
            </p>
            <Image
                src={"/media/footer-icon.svg"}
                width={64}
                height={64}
                alt={"Footer Icon"}
                className="absolute top-5 right-5 md:w-28 md:h-28"
            />
            <ul className="z-10">
                <li>{c.footer.copyright + currentYear}</li>
                <li>{c.footer.addition}</li>
                <li>
                    <ul>
                        {Object.keys(c.socials).map((key: any) => (
                            <li key={key}>
                                <Link
                                    href={c.socials[key].url}
                                    className="flex"
                                >
                                    <Image
                                        src={c.socials[key].icon}
                                        width={32}
                                        height={32}
                                        alt={c.socials[key].title}
                                        className="mr-2"
                                    />
                                    <p>{c.socials[key].title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </footer>
    )
}
