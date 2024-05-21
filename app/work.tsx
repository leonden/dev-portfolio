import React from "react"
import Card from "@/components/essential/card"
import c from "@/content/en.json"
import Link from "next/link"
import Heading from "@/components/essential/heading"
import Section from "@/components/essential/section"
import Button from "@/components/essential/button/button"

export default function Work() {
    return (
        <Section id="work" className="flex flex-wrap gap-3">
            <Heading type="h2">{c.content.work.title}</Heading>
            {c.content.work.projects.map((item, index) => (
                <Card
                    card={{
                        title: item.title,
                        description: item.description,
                        image: item.image,
                        button: { content: "View On GitHub", ref: item.url },
                    }}
                    key={index}
                ></Card>
            ))}
            <Link href={c.content.work.repos}>
                <Button variant="primary">See all</Button>
            </Link>
        </Section>
    )
}
