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

export default function Work() {
    return (
        <section
            id="work"
            className="w-full h-screen flex flex-wrap gap-3 px-3"
        >
            {c.content.work.projects.map((item, index) => (
                <Card key={index} className="w-[350px]">
                    <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>{item.image}</CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Deploy</Button>
                    </CardFooter>
                </Card>
            ))}
        </section>
    )
}
