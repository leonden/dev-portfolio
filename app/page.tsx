import React from "react"
import Home from "./home"
import About from "./about"
import Work from "./work"
import Contact from "./contact"
import Navigation from "../components/navigation"
import ProgressBar from "../components/progressbar"

export default function Page() {
    return (
        <main>
            <Home />
            <About />
            <Work />
            <Contact />
            <Navigation />
            {/* <ProgressBar /> */}
        </main>
    )
}
