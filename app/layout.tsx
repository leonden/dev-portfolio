import type { Metadata } from "next"
import "./globals.css"
import React from "react"
import content from "../content/en.json"

export const metadata: Metadata = {
    title: content.title,
    description: content.description,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="font-rota scroll-smooth">{children}</body>
        </html>
    )
}
