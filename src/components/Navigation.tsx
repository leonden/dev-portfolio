import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { y: 100, opacity: 1, scale: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.15, // Adjust duration for smoother animation
      ease: "easeInOut", // Adjust easing for smoother animation
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.15, // Adjust duration for smoother animation
      ease: "easeInOut", // Adjust easing for smoother animation
    },
  },
};

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {navOpen ? (
        <motion.nav
          className="fixed bottom-32 w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.ul className="p-6 bg-white rounded-2xl shadow-2xl">
            <a href="#about">
              <motion.li variants={itemVariants} className="text-lg">
                About
              </motion.li>
            </a>
            <a href="#work">
              <motion.li variants={itemVariants} className="text-lg">
                Work
              </motion.li>
            </a>
            <a href="#contact">
              <motion.li variants={itemVariants} className="text-lg">
                Contact
              </motion.li>
            </a>
          </motion.ul>
        </motion.nav>
      ) : (
        ""
      )}
      <button
        className="w-[75px] h-[75px] rounded-full fixed bottom-8 bg-black cursor-pointer grid place-items-center"
        onClick={() => setNavOpen(!navOpen)} // Toggle navOpen when the button is clicked
      >
        <div>
          <div className="w-[25px] h-[2px] bg-white m-[8px] transition-all" />
          <div className="w-[25px] h-[2px] bg-white m-[8px] transition-all" />
          <div className="w-[25px] h-[2px] bg-white m-[8px] transition-all" />
        </div>
      </button>
    </div>
  );
}
