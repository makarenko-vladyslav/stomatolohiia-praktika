import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Стоматологія Praktika | Імплантація та протезування Харків",
  description: "Хірургічна точність та комплексна стоматологічна реабілітація в Харкові. Імплантація All-on-4, All-on-6 та складна вилична імплантація Zygoma під седацією з власною цифровою лабораторією.",
  keywords: ["стоматологія харків", "імплантація зубів харків", "протезування зубів", "all on 4 харків", "zygoma імплантація", "стоматологія олексіївка", "лікування під наркозом"],
  openGraph: {
    title: "Стоматологія Praktika — Хірургія та цифрова ортопедія",
    description: "Повний цикл стоматологічної реабілітації у Харкові. Власна цифрова зуботехнічна лабораторія.",
    type: "website",
    locale: "uk_UA",
  },
  icons: {
    icon: "/icon.svg",
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
        <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg-light text-text-main antialiased selection:bg-accent/20">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
