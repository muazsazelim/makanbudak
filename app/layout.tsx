import type { Metadata } from "next";
import { Caveat, Shantell_Sans } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const shantell = Shantell_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-scribble",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://makanbudak.my"),
  title: site.name,
  description: site.description,
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/logo.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${shantell.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
