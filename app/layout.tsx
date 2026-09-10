import type { Metadata } from "next";
import { cookies } from "next/headers";
import Loader from "./components/Loader"; // Adjust path if needed
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://anishchand.dev"),
  title: "Anish Chand — Full Stack Engineer & UI Architect",
  description:
    "Portfolio of Anish Chand — a full-stack engineer specializing in high-performance web applications, immersive frontend experiences with React, Next.js, GSAP, and scalable MERN-stack architectures.",
  keywords: [
    "Anish Chand",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "MERN Stack",
    "GSAP Animations",
    "Frontend Engineer",
    "UI/UX Architect",
  ],
  authors: [{ name: "Anish Chand" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anishchand.dev",
    siteName: "Anish Chand — Portfolio",
    title: "Anish Chand — Full Stack Engineer & UI Architect",
    description:
      "Engineer of high-performance web applications, blending scalable backend architectures with immersive frontend experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Chand — Full Stack Engineer & UI Architect",
    description:
      "Engineer of high-performance web applications, blending scalable backend architectures with immersive frontend experiences.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const cookieStore = await cookies();
  
  const hasVisited = cookieStore.has("hasVisited");

  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-50 antialiased">
        
        {/* 3. ONLY render the loader if the cookie does NOT exist */}
        {!hasVisited && <Loader />}
        <SmoothScroll>

        <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}