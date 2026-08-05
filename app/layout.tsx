import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Стоматологія Praktika Харків — Імплантація та протезування зубів",
  description: "Високотехнологічний центр стоматології у Харкові. Комплексна імплантація All-on-4, All-on-6, зигоматичні імпланти Zygoma, лікування під седацією та власна цифрова лабораторія. Проспект Науки, 77.",
  keywords: ["стоматологія Харків", "імплантація зубів Харків", "All-on-4 Харків", "Zygoma Харків", "стоматолог Олексіївка", "лікування зубів під седацією"],
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: "Стоматологія Praktika — Цифрова імплантація та протезування у Харкові",
    description: "Повний цикл стоматологічної реабілітації: 3D КТ-діагностика, мікроскопічна ендодонтія, Zygoma та All-on-4.",
    type: "website",
    locale: "uk_UA",
    url: "https://praktika.dentist",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Spectral:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
