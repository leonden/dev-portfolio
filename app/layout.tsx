import type { Metadata } from "next"
import "./globals.css"
import React from "react"
import content from "../content/en.json"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

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
        <html lang="en" className="scroll-smooth">
            <body className="font-rota">{children}</body>
            <Analytics />
            <SpeedInsights />
        </html>
    )
}
