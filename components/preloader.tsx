"use client"
import React, { useState } from "react"
import { Progress } from "./ui/progress"

export default function Preloader() {
    const [progress, setProgress] = useState(0)

    React.useEffect(() => {
        const randomTime = Math.floor(Math.random() * 3000) + 1000
        const randomSteps = Math.floor(Math.random() * 3) + 1
        let currentProgress = 0

        const updateProgress = () => {
            if (currentProgress < 100) {
                const step = Math.floor(100 / randomSteps)
                currentProgress = Math.min(currentProgress + step, 100)
                setProgress(currentProgress)
                setTimeout(updateProgress, randomTime / randomSteps)
            }
        }

        setTimeout(updateProgress, randomTime)
    }, [])

    return (
        <div className="w-screen h-screen grid place-items-center z-50 bg-white">
            <div className="w-2/3 md:w-1/2 xl:w-2/5 2xl:w-1/5">
                <h3 className="pl-2 text-2xl mb-2">The Art of Creating.</h3>
                <Progress value={progress} />
            </div>
        </div>
    )
}
