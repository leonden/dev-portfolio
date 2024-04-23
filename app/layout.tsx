import type { Metadata } from "next"
import "./globals.css"
import React from "react"

export const metadata: Metadata = {
    title: "Leon",
    description: "This is my portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="font-rota">{children}</body>
        </html>
    )
}
