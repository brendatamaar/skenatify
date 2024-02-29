"use client";

import Link from "next/link"
import { Tracks } from "../components/tracks/index";
import Footer from "../components/Footer";

export default function Home() {

    return (
        <main className="overflow-hidden flex flex-col">
            <Link
                className="mt-4 ml-4"
                href="/">{"<- Back"}</Link>
            <Tracks />
            <Footer />
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 -translate-y-full bg-[#d9faa1] blur-[110px] w-[428px] h-[428px] rounded-full"></div>
        </main>
    );
}