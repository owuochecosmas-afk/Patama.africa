import Link from "next/link";
export default function Navbar() {
    const links = [
        ["Home", "/"],
        ["About Patama", "/about"],
        ["PATAMA CMS", "/cms"],
        ["Our Approach", "/our-approach"],
        ["Work With Us", "/work-with-us"],
        ["Contact", "/contact"],
    ];
    return (
        <header className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex gap-2 items-center">
                    <span className="font-serif text-[#0A1931] font-black text-2xl">P</span>
                    <span className="tracking-[0.2em] text-[#0A1931] font-bold text-sm">PATAMA<br /><span className="text-[8px] tracking-[0.3em] font-normal -mt-1 block">SYSTEMS</span></span>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm text-[#0A1931]/80">
                    {links.map(([n, h]) => <Link key={h} href={h} className="hover:text-[#0A1931]">{n}</Link>)}
                </nav>
            </div>
        </header>
    );
}