import React from "react"

type SectionProps = {
    children: React.ReactNode
    id: string
    className?: string
}

export default function Section({ children, id, className }: SectionProps) {
    return (
        <section id={id} className={"w-full min-h-screen px-3" || className}>
            {children}
        </section>
    )
}
