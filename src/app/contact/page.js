"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function NetworkBG() { return (<div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-30 hidden md:block"><svg viewBox="0 0 300 200" className="w-full h-full"><circle cx="150" cy="50" r="3" fill="#C5A880" /><circle cx="250" cy="80" r="2" fill="#C5A880" /><circle cx="80" cy="120" r="2" fill="#C5A880" /><line x1="150" y1="50" x2="250" y2="80" stroke="#C5A880" strokeWidth="0.5" /></svg></div>) }

function ContactForm() {
    const params = useSearchParams();
    const pre = params.get('type');
    const map = { church: "PATAMA CMS for my church", skills: "Contributing my skills", partner: "Partnership or collaboration" };
    const [form, setForm] = useState({ name: "", email: "", church: "", phone: "", type: map[pre] || "", msg: "" });
    const [done, setDone] = useState(false);

    if (done) { return (<main className="max-w-2xl mx-auto px-6 py-20 text-center"><h2 className="text-2xl font-bold text-[#0A1931]">Thank you for getting in touch.</h2><p className="text-sm text-gray-600 mt-2">Your enquiry has been sent. We will respond using the contact details you provided.</p></main>) }

    return (
        <main>
            <section className="bg-[#0A1931] text-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold">Start a conversation.</h1>
                    <p className="text-white/60 text-xs mt-3 max-w-xl leading-relaxed">Whether you are exploring PATAMA CMS, interested in working with us, or have a question about Patama Systems, we would like to hear from you.</p>
                </div><NetworkBG />
            </section>
            <section className="max-w-4xl mx-auto px-6 py-10">
                <h2 className="text-center font-bold text-xl text-[#0A1931]">How can we help?</h2>
                <p className="text-center text-[11px] text-gray-500">Complete the form below to send us your enquiry.</p>
                <form onSubmit={e => { e.preventDefault(); setDone(true); }} className="mt-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="text-[11px] font-bold">Your name<span className="text-gray-400 font-normal block">Required</span></label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border mt-1 p-2 rounded text-sm" /></div>
                        <div><label className="text-[11px] font-bold">Email address<span className="text-gray-400 font-normal block">Required</span></label><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border mt-1 p-2 rounded text-sm" /></div>
                        <div><label className="text-[11px] font-bold">Church or organisation<span className="text-gray-400 font-normal block">Optional</span></label><input value={form.church} onChange={e => setForm({ ...form, church: e.target.value })} className="w-full border mt-1 p-2 rounded text-sm" /></div>
                        <div><label className="text-[11px] font-bold">Phone number<span className="text-gray-400 font-normal block">Optional</span></label><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border mt-1 p-2 rounded text-sm" /></div>
                    </div>
                    <div><label className="text-[11px] font-bold">What would you like to discuss?<span className="text-gray-400 font-normal block">Required – select one:</span></label>
                        <div className="grid grid-cols-2 gap-3 mt-2">
                            {["PATAMA CMS for my church", "Contributing my skills", "Partnership or collaboration", "General enquiry"].map(v => (
                                <label key={v} className="flex gap-2 text-xs"><input type="radio" required name="type" checked={form.type === v} onChange={() => setForm({ ...form, type: v })} className="accent-[#C5A880]" /> {v}</label>
                            ))}
                        </div>
                    </div>
                    <div><label className="text-[11px] font-bold">Your message<span className="text-gray-400 font-normal block">Required</span></label><textarea required rows={5} value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} className="w-full border mt-1 p-2 rounded text-sm"></textarea></div>
                    <button className="w-full bg-[#C5A880] text-[#0A1931] py-2.5 rounded font-bold text-sm">Send Enquiry</button>
                </form>
            </section>
        </main>
    )
}

export default function ContactPage() {
    return (<Suspense fallback={<div className="p-20">Loading...</div>}><ContactForm /></Suspense>)
}