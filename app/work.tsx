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

export default function Work() {
    return (
        <Section id="work" className="flex flex-wrap gap-3">
            <Heading type="h2">{c.content.work.title}</Heading>

            <Carousel
                className="overflow-hidden"
                opts={{
                    align: "start",
                    skipSnaps: true,
                    dragFree: false,
                }}
            >
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
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="w-full grid place-items-center">
                <Link href={c.content.work.repos}>
                    <Button variant="primary">See all</Button>
                </Link>
            </div>
        </Section>
    )
}
