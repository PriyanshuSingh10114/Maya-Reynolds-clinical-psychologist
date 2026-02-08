import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds, PsyD offers compassionate therapy for anxiety, trauma, and burnout in Santa Monica, CA. Specializing in CBT, EMDR, and mindfulness-based approaches. In-person and telehealth sessions available throughout California.",
};

import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased font-body bg-secondary text-text">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
