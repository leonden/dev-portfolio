import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import c from "@/content/en.json"
import FuzzyText from "@/components/text/fuzzy-text"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
}

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <FuzzyText
          colorSplit={0}
          trigger="hover"
          direction="horizontal"
          baseIntensity={0.2}
          hoverIntensity={0.5}
          fuzzRange={30}
          sliceSize={1}
          fps={60}
          transitionDuration={0}
          intro
          introDuration={1400}
          letterSpacing={0}
          enableHover
          clickEffect={false}
          glitchMode={false}
          glitchInterval={2000}
          glitchDuration={200}
        >
          {c.notFound.title}
        </FuzzyText>
        <FuzzyText
          colorSplit={0}
          trigger="hover"
          direction="horizontal"
          baseIntensity={0.2}
          hoverIntensity={0.5}
          fuzzRange={30}
          sliceSize={1}
          fps={60}
          transitionDuration={0}
          intro
          introDuration={1400}
          letterSpacing={0}
          enableHover
          clickEffect={false}
          glitchMode={false}
          glitchInterval={2000}
          glitchDuration={200}
        >
          {c.notFound.description}
        </FuzzyText>
      </body>
    </html>
  )
}
