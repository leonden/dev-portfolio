import CircularText from "@/components/text/circular-text"
import c from "@/content/en.json"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="rounded-tl-3xl rounded-tr-3xl w-full min-h-[50vh] bg-black text-white relative p-5 flex flex-col overflow-hidden">
      {currentYear}
      <CircularText
        text={c.footer.circular}
        onHover="speedUp"
        direction="clockwise"
        spinDuration={20}
        size={200}
        fontSize={24}
        draggable
        hoverTilt={20}
        className="custom-class"
        tilt={0}
        fontWeight={900}
        letterSpacing={0}
        startAngle={0}
        repeat={1}
        fill
        ring={false}
      />
    </footer>
  )
}
