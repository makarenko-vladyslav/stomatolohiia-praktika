
import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Стоматологія Praktika — Імплантація та Протезування Харків",
  description: "Експертна хірургічна стоматологія та повне відновлення зубів за протоколами All-on-4/6 та Zygoma у Харкові. Комп'ютерна томографія та лікування уві сні.",
  keywords: ["стоматологія харків", "імплантація зубів", "all on 4 харків", "видалення зуба", "лікування під наркозом", "вініри", "протезування"],
  openGraph: {
    title: "Стоматологія Praktika — Хірургічна Реконструкція Зубів у Харкові",
    description: "Комплексне відновлення зубів з використанням 3D навігації та мікроскопів Carl Zeiss. Професійна стоматологія від експертів.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,500;0,600;0,700;0,800;1,500&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-accent/30 selection:text-text-main bg-bg-light text-text-main">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
