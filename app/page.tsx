import React from "react"
import Home from "./home"
import About from "./about"
import Work from "./work"
import Contact from "./contact"
import Footer from "../components/footer"
import Navigation from "../components/navigation/navigation"
import ProgressBar from "../components/progressbar"

export default function Page() {
    return (
        <>
            <Navigation />
            <Home />
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
