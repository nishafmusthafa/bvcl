import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scafell Partners: AI and business systems for UK businesses",
  description:
    "Scafell Partners builds the system that runs your business: AI agents, ERP, HR and compliance, and marketing, connected for UK businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${interTight.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
