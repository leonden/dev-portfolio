import Heading from "@/components/essential/heading"
import Paragraph from "@/components/essential/paragraph"
import Section from "@/components/essential/section"
import c from "@/content/en.json"
import React from "react"

export default function About() {
    return (
        <Section id="about">
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
        </Section>
    )
}
