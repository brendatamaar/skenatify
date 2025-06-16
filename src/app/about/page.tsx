import Image from "next/image";
import Header from "../components/Header";

import Footer from "../components/Footer";

export default async function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 bg-gray-100 dark:bg-slate-800">
      <header className="w-full text-center">
        <Header />
      </header>

      <div className="px-4">
        <h1 className="font-medium text-lg text-center">
          Welcome to Skenatify
        </h1>
        <br />
        <p className="text-justify mb-3">
          Get the latest song recommendations based on your favorite artists. We
          don’t collect any user data, so you can enjoy music with complete
          peace of mind🎧🔒
        </p>
        <span>Support me: </span>
        <a
          href="https://trakteer.id/brendatamaar/tip?open=true"
          target="_blank"
        >
          <Image
            className="mt-2"
            width={120}
            height={120}
            priority={true}
            alt="Trakteer Saya"
            src="https://cdn.trakteer.id/images/embed/trbtn-red-1.png?date=18-11-2023"
          />
        </a>
      </div>

      <hr className="my-12" />
      <div className="absolute -top-9 left-1/2 -translate-x-1/2 -translate-y-full bg-[#d9faa1] blur-[110px] w-[428px] h-[428px] rounded-full"></div>
      <Footer />
    </main>
  );
}
