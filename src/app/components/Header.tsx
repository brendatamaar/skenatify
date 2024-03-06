
export default function Header() {
    return (
        <header className="relative z-50 leading-none font-medium tracking-[-0.41px] ">
            <div className="relative z-10 mx-6">
                <nav className="relative flex items-center justify-between pt-6">
                    <a href="/" className="flex md:flex-1">
                        Skenatify
                    </a>
                    
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
