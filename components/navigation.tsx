import { Menubar, MenubarMenu, MenubarTrigger } from "../components/ui/menubar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip"
import Link from "next/link"
import React from "react"

export default function Navigation() {
    return (
        <div className="w-full flex justify-center">
            <nav className="fixed bottom-5 w-4/5">
                <Menubar className="w-full justify-between p-0">
                    <MenubarMenu>
                        <MenubarTrigger>
                            <Link href={"#home"} className="text-lg">
                                Home
                            </Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={"#about"}
                                            className="text-lg"
                                        >
                                            About
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Who am I</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={"#work"}
                                            className="text-lg"
                                        >
                                            Work
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>What do I do</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={"#contact"}
                                            className="text-lg"
                                        >
                                            Contact
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>How to reach me</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </nav>
        </div>
    )
}
