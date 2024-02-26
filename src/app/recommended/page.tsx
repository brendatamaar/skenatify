"use client";

import Link from "next/link"
import { Tracks } from "./../components/tracks/index";

export default function Home() {

    return (
        <main className="overflow-hidden flex flex-col">
            <Link
                className="mt-4 ml-4"
                href="/">{"<- Back"}</Link>
            <Tracks />
        </main>
    );
}