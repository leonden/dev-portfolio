import Footer from "./footer"
import About from "../components/pages/about"
import Work from "../components/pages/work"
import Contact from "../components/pages/contact"
import Home from "../components/pages/home"

export default function HomePage() {
  return (
    <>
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
