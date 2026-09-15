import Link from "next/link";
export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
                <div className="flex gap-2">
                    <span className="font-serif text-[#0A1931] font-black text-2xl">P</span>
                    <span className="tracking-[0.2em] text-[#0A1931] font-bold text-sm">PATAMA<br /><span className="text-[8px] font-normal">Intelligent Systems. Lasting Impact.</span></span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    <Link href="/about">About Patama</Link>
                    <Link href="/cms">PATAMA CMS</Link>
                    <Link href="/our-approach">Our Approach</Link>
                    <Link href="/work-with-us">Work With Us</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <p className="text-xs text-gray-400">© 2026 Patama Systems Ltd.</p>
            </div>
        </footer>
    );
}