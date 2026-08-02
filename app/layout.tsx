import { SmoothScroll } from "@/components/smooth-scroll";

import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Стоматологія Praktika — Імплантація та Протезування Харків",
  description: "Клініка повного циклу на проспекті Науки. Хірургічна стоматологія, імплантація All-on-4/Zygoma, лікування під мікроскопом уві сні. 587+ відгуків.",
  keywords: ["стоматологія харків", "імплантація зубів", "All-on-4 харків", "лікування уві сні", "zygoma харків", "проспект науки стоматолог"],
  icons: {
    icon: '/icon.svg'
  },
  openGraph: {
    title: "Стоматологія Praktika — Імплантація та Протезування Харків",
    description: "Хірургічна стоматологія та повне відновлення зубного ряду під мікроскопом. Запишіться на консультацію з 3D КТ.",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Spectral:ital,wght@0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
