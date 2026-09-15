import Link from "next/link";
export default function CMS() {
    return (
        <main>
            <section className="bg-[#0A1931] text-white px-6 py-16"><div className="max-w-4xl mx-auto"><h1 className="text-3xl font-bold">PATAMA CMS</h1><p className="text-[#C5A880] font-bold mt-2">Connecting Churches Through Intelligent Systems.</p><p className="mt-4 text-white/70 text-sm leading-relaxed">A church management system being developed with churches, starting with member management and attendance management. We begin with understanding how churches organise information and carry out their everyday work, so that the system reflects the needs of the people using it.</p><div className="flex gap-3 mt-6"><Link href="/contact" className="bg-[#C5A880] text-[#0A1931] px-5 py-2 rounded font-bold text-sm">Start a Conversation</Link><a href="#current-focus" className="border border-white/30 px-5 py-2 rounded text-sm">Our Current Focus</a></div></div></section>
            <section className="max-w-4xl mx-auto px-6 py-12">
                <h2 className="font-bold text-[#0A1931]">Supporting the work behind church life.</h2>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">Behind every church community are people helping to organise information, record participation and coordinate day-to-day activities. When information is spread across different records and processes, keeping it organised can take time and effort. PATAMA CMS is being developed to support this work, beginning with a focused foundation for member information and attendance records.</p>
                <h3 id="current-focus" className="font-bold mt-10">Starting with members and attendance.</h3>
                <p className="text-sm text-gray-600 mt-2">The initial scope centres on two areas:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#FFFBF7] border p-4 rounded"><p className="font-bold text-sm">Member Management</p><p className="text-xs text-gray-600">Organising church member information so that it is easier for the teams responsible to maintain and use.</p></div>
                    <div className="bg-[#FFFBF7] border p-4 rounded"><p className="font-bold text-sm">Attendance Management</p><p className="text-xs text-gray-600">Supporting the recording and review of attendance at church gatherings.</p></div>
                </div>
                <h3 className="font-bold mt-10">Your experience helps shape the system.</h3>
                <p className="text-sm text-gray-600 mt-2">We welcome conversations with church leaders and the teams responsible for member records and attendance.</p>
                <ul className="text-xs text-gray-600 list-disc ml-5 mt-3 space-y-1">
                    <li>How you currently organise member information.</li>
                    <li>How you record and review attendance.</li>
                    <li>Where your existing processes become difficult.</li>
                    <li>What would make everyday administration easier.</li>
                </ul>
                <Link href="/contact" className="mt-6 inline-block bg-[#C5A880] text-[#0A1931] px-5 py-2 rounded font-bold text-sm">Share Your Church's Needs</Link>
            </section>
        </main>
    )
}