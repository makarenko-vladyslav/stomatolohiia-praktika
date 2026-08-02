import { SmoothScroll } from "@/components/smooth-scroll";

import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Стоматологія Praktika Харків — Імплантація та Протезування зубів",
  description: "Експертна хірургія та повне відновлення зубного ряду за протоколами All-on-4, All-on-6 та Zygoma у Харкові. Комп'ютерна томографія 3D, лікування уві сні та зуботехнічна лабораторія.",
  keywords: ["стоматологія харків", "імплантація зубів харків", "all on 4 харків", "zygoma імплантація", "стоматологічна клініка проспект науки", "лікування зубів під наркозом"],
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "Стоматологія Praktika Харків — Імплантація та Протезування",
    description: "Хірургічне відновлення зубного ряду за один день у Харкові. Лікування під мікроскопом ZEISS, КТ-діагностика та седація.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Spectral:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg-light text-text-main antialiased selection:bg-accent selection:text-white font-sans">
        <LocaleProvider>
          {children}
        </LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
