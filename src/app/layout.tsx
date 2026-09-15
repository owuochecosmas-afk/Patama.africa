import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Patama Systems - Intelligent Systems. Lasting Impact.",
  description: "Patama Systems builds practical digital systems around the people who use them. First product: PATAMA CMS - Connecting Churches Through Intelligent Systems.",
  metadataBase: new URL('https://www.patama.africa'),
  openGraph: {
    title: "Patama Systems Ltd",
    description: "Intelligent Systems. Lasting Impact.",
    url: "https://www.patama.africa",
    siteName: "Patama Systems",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0A1931] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}