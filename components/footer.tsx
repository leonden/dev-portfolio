import React from "react"
import content from "../content/en.json"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full min-h-[50vh] bg-black text-white relative p-5 flex flex-col overflow-hidden">
            <p className="absolute text-9xl sm:text-[200px] lg:text-[300px] 2xl:text-[350px] font-bold text-neutral-900 z-0">
                {content.footer.slogan}
            </p>
            <Image
                src={"/media/footer-icon.svg"}
                width={64}
                height={64}
                alt={"Footer Icon"}
                className="absolute top-5 right-5 md:w-28 md:h-28"
            />
            <ul className="z-10">
                <li>{content.footer.copyright + currentYear}</li>
                <li>{content.footer.addition}</li>
                <li>
                    <ul>
                        {Object.keys(content.socials).map((key: any) => (
                            <li key={key}>
                                <Link
                                    href={content.socials[key].url}
                                    className="flex"
                                >
                                    <Image
                                        src={content.socials[key].icon}
                                        width={32}
                                        height={32}
                                        alt={content.socials[key].title}
                                        className="mr-2"
                                    />
                                    <p>{content.socials[key].title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </footer>
    )
}
