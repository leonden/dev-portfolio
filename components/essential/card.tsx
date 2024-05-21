import Image from "next/image"
import Link from "next/link"
import React from "react"
import Button from "./button/button"

type CardProps = {
    card: {
        title: string
        description: string
        image: string
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
            className={
                "rounded-md bg-white border-slate-500 border-spacing-1 w-full p-5 min-h-[350px]" +
                className
            }
        >
            {/*card.image && (
                <Image
                    src={card.image}
                    alt={card.title}
                    width={250}
                    height={350}
                />
            )*/}
            <h4 className="font-bold text-2xl">{card.title}</h4>
            <p>{card.description}</p>
            {card.button && (
                <Link href={card.button.ref}>
                    <Button variant="primary" className="mt-5 float-end">
                        View on GitHub
                    </Button>
                </Link>
            )}
        </article>
    )
}
