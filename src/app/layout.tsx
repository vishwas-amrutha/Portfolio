import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Full Stack Developer",
    template: "%s | Portfolio",
  },
  description:
    "Full Stack Developer specializing in Next.js, backend systems, security, and scalable architecture. Building production-ready applications with a focus on performance and security.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Angular",
    "Security",
    "Backend Development",
  ],
  authors: [{ name: "Developer" }],
  creator: "Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Portfolio",
    title: "Portfolio | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, backend systems, security, and scalable architecture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, backend systems, security, and scalable architecture.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
