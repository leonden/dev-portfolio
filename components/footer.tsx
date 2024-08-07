import React from "react"
import c from "../content/en.json"
import Image from "next/image"
import Link from "next/link"
import Anchor from "./essential/anchor"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="rounded-tl-3xl rounded-tr-3xl w-full min-h-[50vh] bg-black text-white relative p-5 flex flex-col overflow-hidden">
            <p className="absolute text-9xl sm:text-[200px] lg:text-[300px] 2xl:text-[350px] font-bold text-neutral-900 z-0">
                {c.footer.slogan}
            </p>
            <div className="z-10">
                <div className="flex justify-between items-start max-w-[1200px] w-full xl:mx-auto">
                    <div>
                        <ul>
                            {Object.keys(c.socials).map((key: any) => (
                                <li key={key}>
                                    <Link
                                        href={c.socials[key].url}
                                        className="flex items-center hover:cursor-pointer w-fit my-2"
                                    >
                                        <Image
                                            src={c.socials[key].icon}
                                            width={32}
                                            height={32}
                                            alt={c.socials[key].title}
                                            className="mr-3 w-12"
                                        />
                                        <Anchor
                                            url={c.socials[key].url}
                                            className="text-2xl"
                                        >
                                            {c.socials[key].title}
                                        </Anchor>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Image
                        src={"/media/footer-icon.svg"}
                        width={64}
                        height={64}
                        alt={"Footer Icon"}
                        className="md:w-28 md:h-28"
                    />
                </div>
                <div className="max-w-[1200px] xl:mx-auto">
                    <p className="text-xl mt-4">
                        {c.footer.copyright + currentYear}
                    </p>
                    <p className="text-xl mt-4">{c.footer.p1}</p>
                    <p className="text-xl mt-4">
                        {c.footer.p2}
                        <Anchor url="https://leonhochwimmer.com/">
                            leonhochwimmer.com
                        </Anchor>
                    </p>
                    <p className="text-xl mt-4">
                        {c.footer.p3}
                        <Anchor url="https://nextjs.org/">Next.js 14</Anchor>
                    </p>
                </div>
            </div>
        </footer>
    )
}
