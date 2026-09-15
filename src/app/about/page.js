import Link from "next/link";
export default function About() {
    return (
        <main>
            <section className="bg-[#0A1931] text-white px-6 py-16"><div className="max-w-4xl mx-auto"><h1 className="text-4xl font-bold">About Patama Systems</h1><p className="text-[#C5A880] mt-2">We build digital systems by first understanding the people who will use them.</p><p className="mt-6 text-white/70 leading-relaxed">Patama Systems Ltd is a technology company focused on developing practical solutions to everyday organisational needs. Our work starts with listening, understanding how things are done, and identifying where technology can make a useful difference.</p></div></section>
            <section className="max-w-4xl mx-auto px-6 py-12">
                <h2 className="font-bold text-[#0A1931] text-xl">Useful technology begins with understanding.</h2>
                <p className="text-gray-600 mt-3 leading-relaxed text-sm">Every organisation has its own people, routines and challenges. We believe these should shape the systems it uses. That means taking time to understand the work behind a requirement, being clear about what a solution needs to do, and keeping the people using it involved as it develops. For us, lasting impact comes from systems that remain useful in everyday practice.</p>
                <h3 className="font-bold mt-10">Listen carefully. Build purposefully. Keep improving.</h3>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="border p-4 rounded"><p className="font-bold text-sm">Understand the need</p><p className="text-xs text-gray-600 mt-2">We begin with conversations about how people work, what gets in their way, and what would help.</p></div>
                    <div className="border p-4 rounded"><p className="font-bold text-sm">Start with a clear focus</p><p className="text-xs text-gray-600 mt-2">We identify a practical starting point and build around defined needs.</p></div>
                    <div className="border p-4 rounded"><p className="font-bold text-sm">Learn through use</p><p className="text-xs text-gray-600 mt-2">We use feedback to refine the system and guide what comes next.</p></div>
                </div>
                <Link href="/our-approach" className="mt-8 inline-block bg-[#C5A880] text-[#0A1931] px-5 py-2 rounded font-bold text-sm">Explore Our Approach</Link>
                <div className="mt-16 border-t pt-10">
                    <h3 className="font-bold">Our first product: PATAMA CMS</h3>
                    <p className="text-sm text-gray-600 mt-2">Our first product, PATAMA CMS, brings this approach into the church context. It is being developed with churches, with an initial focus on member management and attendance management.</p>
                    <Link href="/cms" className="mt-4 inline-block bg-[#0A1931] text-white px-5 py-2 rounded text-sm">Explore PATAMA CMS</Link>
                </div>
            </section>
        </main>
    )
}