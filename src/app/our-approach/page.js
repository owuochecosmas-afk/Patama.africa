import Link from "next/link";

function NetworkBG() {
    return (
        <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-40 hidden md:block">
            <svg viewBox="0 0 300 200" className="w-full h-full">
                <circle cx="50" cy="30" r="2" fill="#C5A880" /><circle cx="150" cy="50" r="3" fill="#C5A880" /><circle cx="250" cy="20" r="2" fill="#C5A880" />
                <circle cx="80" cy="120" r="2" fill="#C5A880" /><circle cx="180" cy="100" r="3" fill="#C5A880" /><circle cx="270" cy="110" r="2" fill="#C5A880" />
                <circle cx="40" cy="180" r="2" fill="#C5A880" /><circle cx="200" cy="170" r="2" fill="#C5A880" />
                <line x1="50" y1="30" x2="150" y2="50" stroke="#C5A880" strokeWidth="0.5" opacity="0.5" />
                <line x1="150" y1="50" x2="250" y2="20" stroke="#C5A880" strokeWidth="0.5" opacity="0.5" />
                <line x1="150" y1="50" x2="80" y2="120" stroke="#C5A880" strokeWidth="0.5" opacity="0.5" />
                <line x1="80" y1="120" x2="180" y2="100" stroke="#C5A880" strokeWidth="0.5" opacity="0.5" />
                <line x1="180" y1="100" x2="270" y2="110" stroke="#C5A880" strokeWidth="0.5" opacity="0.5" />
            </svg>
        </div>
    )
}

export default function OurApproach() {
    return (
        <main className="bg-white">
            {/* Opening Banner */}
            <section className="bg-[#0A1931] text-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">Understand the work.<br /><span className="text-[#C5A880]">Build what matters.</span></h1>
                    <p className="mt-4 max-w-xl text-white/60 text-sm leading-relaxed">A useful system begins with a clear understanding of the people, responsibilities and routines it needs to support.<br />Our approach is to listen carefully, agree on a practical starting point, and use feedback to guide development.</p>
                    <Link href="/contact" className="mt-6 inline-block bg-[#C5A880] text-[#0A1931] px-5 py-2.5 rounded text-xs font-bold">Start a Conversation →</Link>
                </div>
                <NetworkBG />
            </section>

            {/* Understand Define Develop Improve bar */}
            <section className="bg-[#F6F3EF] border-b">
                <div className="max-w-6xl mx-auto px-6 py-3 flex gap-6 text-[11px] font-bold tracking-widest text-[#0A1931]/60">
                    <span>Understand</span><span>→</span><span>Define</span><span>→</span><span>Develop</span><span>→</span><span>Improve</span>
                </div>
            </section>

            {/* 01-04 */}
            <section className="max-w-3xl mx-auto px-6 py-12 space-y-10">
                {[
                    ["01", "Understand", "Start with how things work today.", "Before deciding how to build, we seek to understand how the work is currently done. We ask about people, information and steps. We try to understand what is clearly useful and what could be improved. These conversations help us define the purpose and identify where a digital system could make a useful difference."],
                    ["02", "Define", "Give the first version a clear purpose.", "Trying to address every need at once can make a system harder to build and use. We begin by identifying the essential work the first version should support. We distinguish the initial scope from ideas that may need more understanding or to be part of a later phase. This gives everyone a shared view of what is being developed and what remains for future consideration."],
                    ["03", "Develop", "Keep the people doing the work involved.", "The people who will use a system bring knowledge that a requirements list alone cannot capture. As development progresses, their feedback helps us examine whether the proposed flows and forms make sense, whether responsibilities are clearly presented and any adjustments are needed. We use these insights to fine-tune the system and its underlying processes."],
                    ["04", "Improve", "Let experience guide what comes next.", "Using a system can reveal needs and difficulties that were not apparent at the beginning. We use feedback to identify improvements and consider additional capabilities. The aim is to build on a useful starting point while we keep improving over time."],
                ].map(([num, title, sub, desc]) => (
                    <div key={num} className="flex gap-4 relative">
                        <div className="flex flex-col items-center"><div className="w-8 h-8 rounded-full bg-[#0A1931] text-[#C5A880] flex items-center justify-center text-[10px] font-bold">{num}</div><div className="w-px bg-[#E8DDC8] flex-1 mt-2"></div></div>
                        <div className="pb-8"><p className="font-bold text-[#0A1931] text-sm">{title}</p><p className="text-[#C5A880] text-xs font-bold mt-1">{sub}</p><p className="text-gray-500 text-xs mt-2 leading-relaxed">{desc}</p></div>
                    </div>
                ))}
            </section>

            {/* How this shapes PATAMA CMS */}
            <section className="bg-[#FFFBF7] border-y">
                <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1"><h3 className="font-bold text-sm">How this shapes <span className="text-[#C5A880]">PATAMA CMS.</span></h3><p className="text-xs text-gray-600 mt-2 leading-relaxed">PATAMA CMS begins with member management and attendance management. Conversations with churches help us understand how these responsibilities are handled today and how we can support everyday work. Broader vision includes ministries, groups, activities, engagement and reporting, areas of future exploration.<br />This keeps the initial focus clear while allowing church experience to inform the product's direction.</p><Link href="/cms" className="mt-4 inline-block bg-[#C5A880] text-[#0A1931] px-4 py-2 rounded text-[11px] font-bold">Explore PATAMA CMS →</Link></div>
                    <div className="flex-1 flex justify-center"><div className="text-center"><div className="text-5xl">⛪</div><p className="font-black text-[#0A1931] mt-2 text-lg">Patama<span className="text-[#C5A880]">CMS</span></p><p className="text-[8px] text-gray-400">The Patama - official logo </p></div></div>
                </div>
            </section>

            <section className="bg-[#0A1931] text-white text-center px-6 py-12 relative overflow-hidden">
                <h3 className="text-xl font-bold relative z-10">Tell us how your organisation works.</h3>
                <p className="text-white/50 text-xs mt-2 max-w-xl mx-auto relative z-10">What do you need to organise? What takes time or feels difficult? What would make a useful difference for your team? We welcome a conversation to understand your needs and explore whether there is a fit for working together.</p>
                <Link href="/contact" className="mt-6 inline-block bg-[#C5A880] text-[#0A1931] px-6 py-2.5 rounded font-bold text-xs relative z-10">Start a Conversation →</Link>
                <NetworkBG />
            </section>
        </main>
    )
}