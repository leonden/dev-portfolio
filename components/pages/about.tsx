import Section from "@/components/core/section"
import Image from "next/image"
import DitherVeil from "../creative/dither-veil"
import Heading from "../core/heading"

export default function About() {
  return (
    <Section id="about">
      <Heading type="h2">About</Heading>
      <DitherVeil
        src="/DSCF3136-2.jpg"
        pattern="floyd"
        pixelSize={2}
        inkColor="#0a0a0a"
        paperColor="#f4f1ea"
        revealRadius={200}
        softness={0.6}
        linger={1}
        fit="contain"
        rimColor="#a78bfa"
        palette="duotone"
        levels={2}
        contrast={1.15}
        brightness={0}
        rim={0}
        wander={false}
        className="w-[500px] h-[500px] md:w-[600px] md:h-[600px]"
      />
    </Section>
  )
}
