import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-svh ps-2 pe-4 lg:p-2">
      <Header />
      <Search />
      <Footer />
    </main>
  );
}
