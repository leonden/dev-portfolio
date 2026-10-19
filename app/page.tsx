import Footer from "./footer"
import About from "../components/pages/about"
import Work from "../components/pages/work"
import Contact from "../components/pages/contact"
import Home from "../components/pages/home"
import Navigation from "@/components/core/navigation"

export default function HomePage() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
