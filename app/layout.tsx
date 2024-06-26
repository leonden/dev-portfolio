import type { Metadata } from "next"
import "./globals.css"
import React from "react"
import c from "../content/en.json"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: c.title,
    description: c.description,
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
