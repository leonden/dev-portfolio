import React from "react"
import content from "../content/en.json"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full min-h-[50vh] bg-black text-white relative p-5 flex flex-col">
            <Image
                src={"/media/footer-icon.svg"}
                width={64}
                height={64}
                alt={"Footer Icon"}
                className="absolute top-5 right-5 md:w-28 md:h-28"
            />
            <ul>
                <li>{content.footer.copyright + currentYear}</li>
                <li>{content.footer.addition}</li>
                <li>{content.footer.slogan}</li>
                <li>
                    <ul>
                        <li>
                            <Link
                                href={content.socials.linkedin.url}
                                className="flex"
                            >
                                <Image
                                    src={content.socials.linkedin.icon}
                                    width={32}
                                    height={32}
                                    alt={content.socials.linkedin.description}
                                    className="mr-2"
                                />
                                <p>{content.socials.linkedin.description}</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={content.socials.github.url}
                                className="flex"
                            >
                                <Image
                                    src={content.socials.github.icon}
                                    width={32}
                                    height={32}
                                    alt={content.socials.github.description}
                                    className="mr-2"
                                />
                                <p>{content.socials.github.description}</p>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}
