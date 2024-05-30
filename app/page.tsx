import React from "react"
import Home from "./home"
import About from "./about"
import Work from "./work"
import Contact from "./contact"
import Footer from "../components/footer"
import Navigation from "../components/navigation/navigation"
import ProgressBar from "../components/progressbar"
import Cursor from "@/components/cursor"
import ParallaxText from "@/components/parallax-text"

export default function Page() {
    return (
        <>
            {/* {<Cursor />} */}
            <Navigation />
            <Home />
            <div className="mt-10 mb-32">
                <ParallaxText baseVelocity={-1}>
                    Developer - Problem Solver - Pragmatist -
                </ParallaxText>
                <ParallaxText baseVelocity={1}>
                    Photographer - Open Mind - Creativehead -
                </ParallaxText>
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
