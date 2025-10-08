import React from "react"
import Home from "./home"
import About from "./about"
import Work from "./work"
import Contact from "./contact"
import Footer from "../components/footer"
import Navigation from "../components/navigation/navigation"
import ProgressBar from "../components/progressbar"
import CurvedLoop from "@/components/custom/curved-loop"
import Cursor from "@/components/cursor"

export default function Page() {
  return (
    <>
      {/* {<Cursor />} */}
      <Navigation />
      <Home />
      <div className="mt-10 mb-40 md:mb-60 lg:mb-80">
        <CurvedLoop
          marqueeText="Problem Solver ✦ Creative Head ✦ Pragmatist ✦ Open Mind ✦ Team Player"
          speed={1.5}
          curveAmount={400}
          interactive={true}
          className="text-[12rem] md:text-8xl"
        />
      </div>
      <div className="max-w-[1200px] xl:mx-auto">
        <main>
          <About />
          <Work />
          <Contact />
        </main>
      </div>
      <Footer />
      <ProgressBar />
    </>
  )
}
