import React from "react"
import Image from "next/image"
import Heading from "../components/essential/heading"
import c from "../content/en.json"
import Paragraph from "@/components/essential/paragraph/paragraph"
import Anchor from "@/components/essential/anchor"
import Section from "@/components/essential/section"

export default function Contact() {
    return (
        <Section id="contact" className="grid place-items-center">
            <Image
                src={"/media/contact-gradient.svg"}
                width={100}
                height={100}
                alt="Contact Background"
                className="object-cover w-full h-full lg:h-fit absolute z-0 select-none"
            />
            <div className="flex flex-col gap-24 z-10">
                <Heading type="h2">{c.content.contact.title}</Heading>
                <Paragraph className="text-4xl">
                    {c.content.contact.description}
                    <Anchor url="#home" type="inherit">
                        <strong>
                            <i>I feel you</i>
                        </strong>
                    </Anchor>
                </Paragraph>
            </div>
        </Section>
    )
}
