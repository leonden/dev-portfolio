import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Home />
      <About />
      <Contact />{" "}
      <motion.div
        className="translate-x-0 fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-300 to-purple-400 origin-left"
        style={{ scaleX }}
      />
    </>
  );
}

export default App;
