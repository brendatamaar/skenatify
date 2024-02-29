import Link from "next/link";
import Header from "../components/Header";

export default async function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-8 bg-gray-100">
            <header className="w-full text-center text-black">
                <Header/>
            </header>

            <div className="px-4">
                <h1 className="font-medium text-lg text-center">
                    Selamat datang di Skenatify
                </h1>
                <br />
                <p className="text-justify">
                    Dapatkan rekomendasi lagu-lagu terbaru berdasarkan artis favoritmu. Kami tidak mengambil data apapun dari pengguna, sehingga kamu dapat menikmati musik tanpa khawatir akan privasimu.
                </p>
                <br />
                <p className="text-justify"><b>Tech Stack:</b> Next.js, Typescript, Tailwind, shadcn/ui, Spotify API</p>
            </div>

            <hr className="my-12" />
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 -translate-y-full bg-[#d9faa1] blur-[110px] w-[428px] h-[428px] rounded-full"></div>
            <p className="fixed bottom-0 left-0 right-0 block border-t border-t-muted bg-white p-5 text-right text-sm text-muted-foreground print:hidden">
                &copy; 2024 -{" "}
                <a
                    className="underline"
                    href="https://brendatama.vercel.app"
                    target="_blank"
                >
                    Brendatama Akbar
                </a>
            </p>
        </main>
    );
}
