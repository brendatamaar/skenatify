
export default function Footer() {
    return (
        <p className="fixed bottom-0 left-0 right-0 block border-t border-t-muted bg-white dark:bg-slate-800 p-4 text-right text-xs text-muted-foreground print:hidden">

            &copy; 2024 -{" "}
            <a
                className="underline"
                href="https://brendatama.vercel.app"
                target="_blank"
            >
                Brendatama Akbar
            </a>
        </p>
    );
}
