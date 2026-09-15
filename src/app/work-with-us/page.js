import Link from "next/link";
function NetworkBG() { return (<div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-30 hidden md:block"><svg viewBox="0 0 300 200" className="w-full h-full"><circle cx="50" cy="30" r="3" fill="#C5A880" /><circle cx="150" cy="50" r="3" fill="#C5A880" /><circle cx="250" cy="20" r="3" fill="#C5A880" /><circle cx="80" cy="120" r="2" fill="#C5A880" /><circle cx="180" cy="100" r="3" fill="#C5A880" /><line x1="50" y1="30" x2="150" y2="50" stroke="#C5A880" strokeWidth="0.5" /><line x1="150" y1="50" x2="80" y2="120" stroke="#C5A880" strokeWidth="0.5" /></svg></div>) }

export default function WorkWithUs() {
    return (
        <main className="bg-white">
            <section className="bg-[#0A1931] text-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">
                    <h1 className="text-3xl font-bold">Let's explore what we can<br /><span className="text-[#C5A880]">build together.</span></h1>
                    <p className="text-white/60 text-xs mt-3 max-w-xl leading-relaxed">We welcome conversations with churches exploring PATAMA CMS, people interested in contributing their skills, and organisations that see an opportunity to work with Patama Systems.<br />Tell us what brings you here and where you think we could work together.</p>
                    <Link href="/contact" className="mt-5 inline-block bg-[#C5A880] text-[#0A1931] px-5 py-2 rounded text-xs font-bold">Start a Conversation →</Link>
                </div><NetworkBG />
            </section>

            <section className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 border-b">
                <div className="flex-1"><p className="text-[9px] tracking-widest text-gray-400">FOR CHURCHES</p><h3 className="font-bold text-sm mt-1">Help shape PATAMA CMS around real church needs.</h3><p className="text-xs text-gray-600 mt-2 leading-relaxed">Are you looking for a better way to organise member information and record attendance? We would like to understand how your church handles this work today, where difficulties arise, and what you would need from a church management system. PATAMA CMS is being developed with churches, starting with member management and attendance management.</p><div className="flex gap-2 mt-4"><Link href="/contact?type=church" className="bg-[#C5A880] text-[#0A1931] px-4 py-2 rounded text-[11px] font-bold">Talk to Us About Your Church →</Link><Link href="/cms" className="border px-4 py-2 rounded text-[11px]">Explore PATAMA CMS</Link></div></div>
                <div className="flex-1 flex justify-center"><div className="text-center"><div className="text-5xl">⛪</div><p className="font-black">Patama<span className="text-[#C5A880]">CMS</span></p></div></div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-6">
                <div className="bg-[#FFFBF7] p-6 rounded border"><p className="text-[9px] tracking-widest">FOR CONTRIBUTORS AND COLLABORATORS</p><h3 className="font-bold text-sm mt-1">Bring your skills and perspective.</h3><p className="text-xs text-gray-600 mt-2">Useful systems benefit from people who understand technology, design and the work those systems need to support. If you are interested in contributing to Patama's work, tell us about your skills, the areas that interest you, and how you would like to be involved.</p><Link href="/contact?type=skills" className="mt-4 inline-block bg-[#C5A880] text-[#0A1931] px-4 py-1.5 rounded text-[11px] font-bold">Discuss a Contribution →</Link></div>
                <div className="bg-[#FFFBF7] p-6 rounded border"><p className="text-[9px] tracking-widest">FOR ORGANISATIONS AND POTENTIAL PARTNERS</p><h3 className="font-bold text-sm mt-1">Start with a shared area of interest.</h3><p className="text-xs text-gray-600 mt-2">You may see a connection between Patama's work and the needs of your organisation or the communities you serve. We welcome a conversation about that connection, what you hope to achieve, and where collaboration could be useful.</p><Link href="/contact?type=partner" className="mt-4 inline-block bg-[#C5A880] text-[#0A1931] px-4 py-1.5 rounded text-[11px] font-bold">Discuss Working Together →</Link></div>
            </section>

            <section className="max-w-3xl mx-auto px-6 py-10">
                <h3 className="font-bold text-sm">Help us understand what you have in mind.</h3>
                <p className="text-xs text-gray-600 mt-1">When you get in touch, it helps to share:</p>
                <ul className="text-xs text-gray-600 list-disc ml-4 mt-2 space-y-1">
                    <li>Your name and the church or organisation you represent, if applicable.</li>
                    <li>What you would like to discuss.</li>
                    <li>The need, idea or contribution you have in mind.</li>
                    <li>The best way to reach you.</li>
                </ul>
                <p className="text-xs text-gray-400 mt-3">We will use this as a starting point to understand your enquiry and discuss an appropriate next step.</p>
            </section>

            <section className="bg-[#0A1931] text-white text-center px-6 py-12">
                <h3 className="font-bold">There is a conversation worth having.</h3>
                <p className="text-white/50 text-xs mt-2">Whether you have a clear requirement or an idea you would like to explore, we would like to hear from you.</p>
                <Link href="/contact" className="mt-5 inline-block bg-[#C5A880] text-[#0A1931] px-6 py-2 rounded font-bold text-xs">Contact Patama →</Link>
            </section>
        </main>
    )
}