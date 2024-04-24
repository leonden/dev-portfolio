"use client"
import React, { useEffect, useRef, useState } from "react"
import "./morphing-background.scss"

export default function MorphingBackground() {
    const interBubbleRef = useRef(null)
    const [curX, setCurX] = useState(0)
    const [curY, setCurY] = useState(0)
    const [tgX, setTgX] = useState(0)
    const [tgY, setTgY] = useState(0)

    useEffect(() => {
        const interBubble: HTMLDivElement | null = interBubbleRef.current

        function move() {
            setCurX((prevX) => prevX + (tgX - prevX) / 20)
            setCurY((prevY) => prevY + (tgY - prevY) / 20)
            if (interBubble)
                interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
            requestAnimationFrame(move)
        }

        const handleMouseMove = (event: MouseEvent) => {
            setTgX(event.clientX)
            setTgY(event.clientY)
        }

        window.addEventListener("mousemove", handleMouseMove)

        move()

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [curX, curY, tgX, tgY])

    return (
        <div className="gradient-bg absolute top-0 z-0">
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive" ref={interBubbleRef}></div>
            </div>
        </div>
    )
}
