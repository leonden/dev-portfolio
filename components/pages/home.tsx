import Section from "@/components/core/section"
import GradientASCII from "../creative/gradient-ascii"

export default function Home() {
  return (
    <section
      className="relative w-full h-screen min-h-screen pb-[100px]"
      id="home"
    >
      <GradientASCII
        colors={["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
        shape="pinch"
        characters=" =+xX0S8#@"
        cellSize={16}
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
      <div>Home</div>
    </section>
  )
}
