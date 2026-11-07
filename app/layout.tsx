import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import { siteMeta } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Server-rendered metadata is PT (the default language); LangProvider swaps
// document.title when the visitor switches to EN.
export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-arthur-plum.vercel.app"),
  title: siteMeta.title.pt,
  description: siteMeta.description.pt,
  openGraph: {
    type: "website",
    url: "/",
    title: siteMeta.title.pt,
    description: siteMeta.description.pt,
    locale: "pt_BR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteMeta.title.pt,
    description: siteMeta.description.pt,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
