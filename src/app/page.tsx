import Link from "next/link";
export default function Home() {
  return (
    <main>
      {/* Opening Banner */}
      <section className="bg-[#0A1931] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Intelligent Systems.<br /><span className="text-[#C5A880]">Lasting Impact.</span></h1>
          <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">Patama Systems builds practical digital systems around the people who use them. We begin by understanding real needs, then develop solutions that support everyday work and lasting progress.</p>
          <div className="mt-8 flex gap-3">
            <Link href="/cms" className="bg-[#C5A880] text-[#0A1931] px-5 py-2.5 rounded text-sm font-bold">Explore PATAMA CMS</Link>
            <Link href="/contact" className="border border-white/30 px-5 py-2.5 rounded text-sm">Start a Conversation</Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 hidden md:block" style={{ backgroundImage: 'radial-gradient(#C5A880 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
      </section>

      {/* Introducing Patama */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#0A1931]">Technology grounded in real needs.</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">We believe useful technology starts with listening. Our focus is on understanding how people and organisations work, and building systems that respond to that reality.</p>
          <Link href="/about" className="mt-4 inline-block text-[#C5A880] text-sm font-bold border-b border-[#C5A880]">About Patama →</Link>
        </div>
        <div className="flex-1 bg-[#F8F5EF] h-52 rounded w-full"></div>
      </section>

      {/* Our First Product */}
      <section className="bg-[#FFFBF7] border-y">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-[10px] tracking-widest text-gray-400">OUR FIRST PRODUCT</p>
          <h2 className="text-2xl font-bold text-[#0A1931] mt-2">PATAMA CMS</h2>
          <p className="font-bold text-[#0A1931]">Connecting Churches Through Intelligent Systems.</p>
          <p className="mt-3 text-gray-600 max-w-2xl text-sm leading-relaxed">PATAMA CMS is being developed with churches to support the way they organise and connect with their people. Our initial focus is member management and attendance management.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
            <div className="bg-white p-4 rounded border flex gap-3"><div>👥</div><div><p className="font-bold text-sm">Member Management</p><p className="text-xs text-gray-500">Organising church member information.</p></div></div>
            <div className="bg-white p-4 rounded border flex gap-3"><div>📅</div><div><p className="font-bold text-sm">Attendance Management</p><p className="text-xs text-gray-500">Supporting church attendance recording.</p></div></div>
          </div>
          <p className="mt-4 text-xs text-gray-500">Broader capabilities will be shaped through continued conversations with churches.</p>
          <Link href="/cms" className="mt-6 inline-block bg-[#C5A880] text-[#0A1931] px-5 py-2.5 rounded text-sm font-bold">Explore PATAMA CMS</Link>
        </div>
      </section>

      {/* Our Approach */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#0A1931]">Listen. Build. Refine.</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            ["Listen", "Understand the people, routines and challenges behind the need."],
            ["Build", "Focus on practical solutions with a clear starting point."],
            ["Refine", "Use feedback to guide improvements and future development."],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-[#C5A880] pl-4"><p className="font-bold text-[#0A1931]">{t}</p><p className="text-sm text-gray-600 mt-1">{d}</p></div>
          ))}
        </div>
        <Link href="/our-approach" className="mt-6 inline-block text-[#C5A880] text-sm font-bold border-b border-[#C5A880]">Our Approach →</Link>
      </section>

      {/* Invitation */}
      <section className="bg-[#0A1931] text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold">Let's start with a conversation.</h2>
            <p className="text-white/60 text-sm mt-2 max-w-xl">Are you a church exploring PATAMA CMS, or interested in working with Patama Systems? We would like to hear from you.</p>
          </div>
          <Link href="/contact" className="bg-[#C5A880] text-[#0A1931] px-6 py-3 rounded font-bold text-sm">Start a Conversation</Link>
        </div>
      </section>
    </main>
  )
}