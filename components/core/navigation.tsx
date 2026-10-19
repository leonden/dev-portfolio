import Link from "next/link"
import React from "react"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <ul className="flex justify-between text-lg font-medium list-none max-w-[1200px] mx-auto py-2">
        <Link href="#home" className="w-full px-2">
          <li>
            Home
            <div className="w-full h-0.5 bg-white mt-2" />
          </li>
        </Link>
        <Link href="#about" className="w-full px-2">
          <li>
            About
            <div className="w-full h-0.5 bg-white mt-2" />
          </li>
        </Link>
        <Link href="#work" className="w-full px-2">
          <li>
            Work
            <div className="w-full h-0.5 bg-white mt-2" />
          </li>
        </Link>
        <Link href="#contact" className="w-full px-2">
          <li>
            Contact
            <div className="w-full h-0.5 bg-white mt-2" />
          </li>
        </Link>
      </ul>
    </nav>
  )
}
