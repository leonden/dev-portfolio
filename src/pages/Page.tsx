import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ProgressBar from "../components/ProgressBar";
import TextSlider from "../components/TextSlider";

export default function Page() {
  return (
    <>
      <Home />
      <TextSlider />
      <About />
      <Contact />
      <ProgressBar />
    </>
  );
}
