import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
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
      <motion.div
        className="translate-x-0 fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-300 to-purple-400 origin-left"
        style={{ scaleX }}
      />
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;
