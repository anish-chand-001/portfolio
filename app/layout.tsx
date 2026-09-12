import type { Metadata } from "next";
import Loader from "./components/Loader"; // Adjust path if needed
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://anishchand.vercel.app"),
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
  authors: [{ name: "Anish Chand", url: "https://anishchand.vercel.app" }],
  creator: "Anish Chand",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anishchand.vercel.app",
    siteName: "Anish Chand — Portfolio",
    title: "Anish Chand — Full Stack Engineer & UI Architect",
    description:
      "Engineer of high-performance web applications, blending scalable backend architectures with immersive frontend experiences.",
    images: [
      {
        url: "/og-image.jpg", // Create a 1200x630 image and put it in your 'public' folder
        width: 1200,
        height: 630,
        alt: "Anish Chand Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Chand — Full Stack Engineer & UI Architect",
    description:
      "Engineer of high-performance web applications, blending scalable backend architectures with immersive frontend experiences.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-50 antialiased">
        <Loader />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}