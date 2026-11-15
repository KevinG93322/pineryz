import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans } from "next/font/google";

import { siteUrl } from "@/lib/site";

import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PineryZ",
    template: "%s — PineryZ",
  },
  description:
    "PineryZ is a technology company working on blockchain infrastructure. VaultOS, the planned flagship, is a demonstration of on-chain vault creation and registration.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "PineryZ",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={plexSans.variable}>
      <body>{children}</body>
    </html>
  );
}
