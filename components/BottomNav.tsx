
"use client";
import { useLocale } from "@/lib/i18n";

export default function BottomNav() {
  const { t } = useLocale();

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-primary/95 backdrop-blur-md border-t border-white/10 z-40 px-4 py-3 flex items-center justify-around shadow-2xl">
      <a href="#about" className="flex flex-col items-center justify-center space-y-1">
        <span className="font-body text-[0.6rem] uppercase tracking-wider text-white hover:text-accent font-medium">
          {t("nav.about") as string}
        </span>
      </a>
      <a href="#services" className="flex flex-col items-center justify-center space-y-1">
        <span className="font-body text-[0.6rem] uppercase tracking-wider text-white hover:text-accent font-medium">
          {t("nav.services") as string}
        </span>
      </a>
      <a href="#calculator" className="flex flex-col items-center justify-center space-y-1">
        <span className="font-body text-[0.6rem] uppercase tracking-wider text-white hover:text-accent font-medium">
          Калькулятор
        </span>
      </a>
      <a href="#booking" className="flex flex-col items-center justify-center space-y-1">
        <span className="font-body text-[0.6rem] uppercase tracking-wider text-accent font-bold">
          {t("common.book") as string}
        </span>
      </a>
    </div>
  );
}
