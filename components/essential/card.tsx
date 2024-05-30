import Image from "next/image"
import Link from "next/link"
import React from "react"
import Button from "./button/button"
import Tag from "../tag"
import { cn } from "@/lib/utils"

type CardProps = {
    card: {
        title: string
        description: string
        tags?: string[]
        button?: { content: string; ref: string }
    }
    className?: string
}

/**
 * A generic card component.
 *
 * @param {string} card.title - The card title.
 * @param {string} card.description - The card description.
 * @param {string} card.image - The card image.
 * @param {string} card.button.content - The button content.
 * @param {string} card.button.ref - The button reference.
 * @param {string} className - Additional classes to be added to the card.
 * @returns {React.ReactElement} The card component.
 */
export default function Card({ card, className }: CardProps) {
    return (
        <article
            className={cn(
                "w-full rounded-md bg-white border border-slate-200 border-spacing-1 p-5 h-[400px] sm:w-[300px] relative",
                className
            )}
        >
            <h4 className="font-bold text-2xl">{card.title}</h4>
            <p className="my-4 leading-5">{card.description}</p>

            {card.tags && (
                <div className="max-w-[200px] flex-wrap flex gap-1">
                    {card.tags.map((tag, index) => (
                        <Tag variant="primary" key={index}>
                            {tag}
                        </Tag>
                    ))}
                </div>
            )}

            {card.button && (
                <Link href={card.button.ref}>
                    <Button
                        variant="primary"
                        className="mt-5 absolute bottom-5 right-5"
                    >
                        View on GitHub
                    </Button>
                </Link>
            )}
        </article>
    )
}
