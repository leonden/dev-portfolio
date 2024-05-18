import React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import c from "@/content/en.json"
import Link from "next/link"
import Image from "next/image"
import Heading from "@/components/essential/heading"
import Section from "@/components/essential/section"

export default function Work() {
    return (
        <Section id="work" className="flex flex-wrap gap-3">
            <Heading type="h2">{c.content.work.title}</Heading>
            {c.content.work.projects.map((item, index) => (
                <Card key={index} className="w-[350px] max-h-[400px] relative">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={350}
                        height={400}
                        className="object-cover w-full h-full absolute z-0 select-none brightness-75"
                    ></Image>
                    <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>{item.image}</CardContent>
                    <CardFooter className="flex justify-between absolute bottom-0 right-0">
                        <Link href={item.url}>
                            <Button>View on GitHub</Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
            <Link href={c.content.work.repos}>
                <Button>See all</Button>
            </Link>
        </Section>
    )
}
