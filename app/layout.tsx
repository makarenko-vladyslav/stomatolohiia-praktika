import { SmoothScroll } from "@/components/smooth-scroll";

import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Стоматологія Praktika Харків — Імплантація зубів",
  description: "Експертна імплантація та протезування зубів у Харкові. All-on-4, All-on-6, Zygoma, лікування під наркозом (уві сні) у стоматології Praktika на проспекті Науки.",
  keywords: ["стоматологія Харків", "імплантація зубів Харків", "протезування Харків", "All on 4 Харків", "зуботехнічна лабораторія Харків"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Стоматологія Praktika Харків — Імплантація зубів",
    description: "Тотальна імплантація All-on-4/6 та вилицеві рішення Zygoma у Харкові. Власна цифрова зуботехнічна лабораторія.",
    url: "https://praktika.dentist",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LocaleProvider>
          {children}
        </LocaleProvider>
        <SmoothScroll />
      </body>
    </html>
  );
}
