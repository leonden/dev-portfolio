import Section from "@/components/core/section"
import FlexCarousel, { FlexCarouselItem } from "../creative/flex-carousel"
import c from "@/content/en.json"

export default function Work() {
  const items: FlexCarouselItem[] = c.content.work.projects.map((project) => ({
    src: project.image,
    alt: project.title,
    title: project.title,
    subtitle: project.description,
  }))

  return (
    <section id="work" className={"w-full min-h-screen pt-3 pb-[100px] px-3"}>
      <div className="w-full h-[560px] xl:h-[700px] relative">
        <FlexCarousel
          items={items}
          preset="liquid"
          intro="rise"
          cardHeight={0.5}
          gap={12}
          squeeze={0.2}
          focusOnClick
          captions
          fit="landscape"
          radius={0}
          lensWidth={0.74}
          lensHeight={1.18}
          tilt={62}
          roundness={1}
          bend={0.34}
          reach={0.38}
          curl="twist"
          dispersion={0.45}
          liquid={0}
          followCursor={false}
          autoplay={false}
          interval={4}
          captureWheel
        />
      </div>
    </section>
  )
}
