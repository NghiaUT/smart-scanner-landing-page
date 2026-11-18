import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Study Scanner · Lecture photos. Within reach.",
  description:
    "Capture or import lecture slides and whiteboard photos, organize them by subject, and find them again with searchable text.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-dvh bg-white font-sans text-[#0f172a]"
      >
        {children}
      </body>
    </html>
  );
}
