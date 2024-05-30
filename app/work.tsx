import React from "react"
import Card from "@/components/essential/card"
import c from "@/content/en.json"
import Link from "next/link"
import Heading from "@/components/essential/heading"
import Section from "@/components/essential/section"
import Button from "@/components/essential/button/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel"
import Paragraph from "@/components/essential/paragraph/paragraph"

export default function Work() {
    return (
        <Section id="work" className="flex flex-wrap gap-3">
            <Heading type="h2">{c.content.work.title}</Heading>
            <Paragraph className="text-4xl">
                {c.content.work.description}
            </Paragraph>

            <Carousel
                className="overflow-hidden relative"
                opts={{
                    align: "start",
                    skipSnaps: true,
                    dragFree: false,
                }}
            >
                <CarouselPrevious />
                <CarouselContent>
                    {c.content.work.projects.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="w-full sm:basis-[300px] flex"
                        >
                            <Card
                                card={{
                                    title: item.title,
                                    description: item.description,
                                    tags: item.technologies,
                                    button: {
                                        content: "View On GitHub",
                                        ref: item.url,
                                    },
                                }}
                            ></Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden sm:block w-[100px] absolute right-0 top-0 h-full bg-gradient-to-l from-white to-transparent origin-right" />
                <CarouselNext />
            </Carousel>

            <div className="w-full grid place-items-center mt-10">
                <Link href={c.content.work.repos}>
                    <Button variant="primary">See all</Button>
                </Link>
            </div>
        </Section>
    )
}
