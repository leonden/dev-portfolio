import Heading from "@/components/essential/heading"
import Paragraph from "@/components/essential/paragraph/paragraph"
import Section from "@/components/essential/section"
import Tag from "@/components/tag/tag"
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
            <Paragraph className="text-4xl flex flex-wrap gap-2">
                {c.content.about.experience.tools.map((tool, index) => (
                    <Tag variant="primary" size="lg" key={index}>
                        {tool}
                    </Tag>
                ))}
            </Paragraph>
        </Section>
    )
}
