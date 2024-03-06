"use client"
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";


export default function Header() {

    const { theme, setTheme } = useTheme();

    return (
        <header className="relative z-50 leading-none font-medium tracking-[-0.41px] ">
            <div className="relative z-10 mx-6">
                <nav className="relative flex items-center justify-between pt-6">
                    <a href="/" className="flex md:flex-1">
                        Skenatify
                    </a>
                    
                    <div className="flex items-center justify-end lg:justify-center flex-1 text-sm">
                        <Button variant="outline" size="icon" onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}>
                            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>
                    
                    <div className="flex items-center justify-end flex-1 text-sm">
                        <a href="/about">
                            Tentang
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
