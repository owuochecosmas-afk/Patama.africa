"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ).then(() => {
            alert("✅ Message sent!");
            e.target.reset();
            setLoading(false);
        }).catch((err) => {
            alert("❌ Failed: " + JSON.stringify(err));
            setLoading(false);
        });
    };

    return (
        <form onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md">
            <input type="text" name="user_name" placeholder="Your Name" required className="p-3 border rounded-lg" />
            <input type="email" name="user_email" placeholder="Your Email" required className="p-3 border rounded-lg" />
            <textarea name="message" placeholder="Your Message" required rows={5} className="p-3 border rounded-lg"></textarea>
            <button type="submit" disabled={loading} className="p-3 bg-green-700 text-white rounded-lg font-bold">
                {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}