import Heading from "@/components/heading"
import Paragraph from "@/components/paragraph"
import c from "@/content/en.json"
import React from "react"

export default function About() {
    return (
        <section id="about" className="w-full min-h-screen px-3">
            <Heading type="h2">{c.content.about.title}</Heading>
            <Paragraph className="text-4xl">{c.content.about.me.p1}</Paragraph>
            <Paragraph className="text-4xl">{c.content.about.me.p2}</Paragraph>
            <Heading type="h3" className="text-5xl xl:text-8xl font-bold">
                {c.content.about.subtitle1}
            </Heading>
            <Paragraph className="text-4xl">
                {c.content.about.experience.tools.map((tool, index) => (
                    <span key={index}>{tool}, </span>
                ))}
            </Paragraph>
        </section>
    )
}
