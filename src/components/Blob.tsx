import { useState, useEffect } from "react";

function Blob() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX - 200, y: e.clientY - 200 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          boxSizing: "content-box",
        }}
        className={
          "rounded-full w-96 h-80 blur-3xl animate-spin-slow z-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400"
        }
      ></div>
    </>
  );
}

export default Blob;
