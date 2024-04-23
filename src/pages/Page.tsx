import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ProgressBar from "../components/ProgressBar";
import TextSlider from "../components/TextSlider";
import Navigation from "../components/Navigation";
import Work from "./Work";

export default function Page() {
  return (
    <>
      <Home />
      <TextSlider />
      <About />
      <Work />
      <Contact />
      <Navigation />
      <ProgressBar />
    </>
  );
}
