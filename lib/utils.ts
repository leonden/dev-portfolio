import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const isTouchDevice = () => {
    if (typeof window === "undefined" || typeof navigator === "undefined")
        return false
    return "ontouchstart" in window || navigator.maxTouchPoints > 0
}
