import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import c from "@/content/en.json"
import FuzzyText from "@/components/text/fuzzy-text"
import GradientASCII from "@/components/creative/gradient-ascii"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
}

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative w-screen h-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 pointer-events-none">
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
            className="text-6xl"
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
            className="gochi-hand max-w-screen"
          >
            {c.notFound.description}
          </FuzzyText>
        </div>
        <div className="absolute inset-0 z-0">
          <GradientASCII
            colors={["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
            shape="horizon"
            characters=" =+xX0S8#@"
            cellSize={36}
            density={0.8}
            glyphOpacity={0.85}
            glow={0.5}
            depthOfField={1}
            flicker={0.1}
            softness={0.5}
            scale={1}
            flow={0.5}
            speed={0.5}
            gradientOpacity={0.9}
            grain={0.08}
            variation={0}
            mouseInteraction
            scrambleRadius={0.1}
            clickEffect="wave"
            intro
            lightMode={false}
          />
        </div>
      </body>
    </html>
  )
}
