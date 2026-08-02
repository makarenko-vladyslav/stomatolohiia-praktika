
"use client";
import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/i18n";

export default function BookingForm() {
  const { t, locale } = useLocale();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [sleep, setSleep] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="booking" className="py-24 bg-bg-light relative scroll-mt-12">
      
      {/* Soft teal-tinted ambient background circle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none w-96 h-96 bg-accent/5 rounded-full blur-3xl z-0" />

      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column structured meta details — V3 compliant */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-body text-xs font-bold text-accent uppercase tracking-[0.3em]">
            {t("booking.kicker") as string}
          </span>
          
          <h2 className="font-display text-text-main text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-tight">
            {t("booking.title") as string}
          </h2>
          
          <p className="font-body text-text-muted text-xs leading-relaxed">
            {t("booking.desc") as string}
          </p>

          {/* Element 5: Structured Hours Mini-Table */}
          <div className="border-t border-border-subtle pt-6 space-y-4">
            <h4 className="font-body text-[0.625rem] text-text-main font-bold uppercase tracking-[0.2em]">
              {t("booking.hours_title") as string || "Графік роботи"}
            </h4>
            <div className="space-y-2 font-body text-xs text-text-muted">
              <div className="flex justify-between border-b border-border-subtle/40 pb-1">
                <span>Пн — Пт</span>
                <span className="font-semibold tabular-nums text-text-main">09:00 — 19:00</span>
              </div>
              <div className="flex justify-between border-b border-border-subtle/40 pb-1">
                <span>Субота</span>
                <span className="font-semibold tabular-nums text-text-main">09:00 — 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Неділя</span>
                <span className="font-semibold text-accent font-bold">ЗАЧИНЕНО</span>
              </div>
            </div>
          </div>

          {/* Element 6: Address & Link */}
          <div className="pt-4 space-y-2 border-t border-border-subtle">
            <p className="font-body text-xs text-text-main font-bold uppercase tracking-wider">
              Локація клініки
            </p>
            <p className="font-body text-xs text-text-muted leading-relaxed">
              Харків, проспект Науки, 77 • ст. метро &quot;23 Серпня&quot; • Власна парковка для гостей
            </p>
            <a 
              href="tel:+380507717535" 
              className="inline-block font-body text-xs font-bold text-accent hover:text-primary transition-colors tracking-widest uppercase mt-1"
            >
              тел. +38 050 771 75 35
            </a>
          </div>

          {/* Element 7: Trust micro-line */}
          <p className="font-body text-[0.55rem] text-text-muted/60 leading-relaxed uppercase tracking-wider">
            {t("booking.trust_line") as string || "* Клініка має державну ліцензію МОЗ України серії АЕ №571344"}
          </p>

        </div>

        {/* Input Form Card — Clean solid white overlay background */}
        <div className="lg:col-span-7 bg-bg-alt p-6 md:p-10 border border-border-subtle rounded-lg shadow-xl relative z-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="space-y-1">
                <label className="font-body text-[0.65rem] text-text-main uppercase font-bold tracking-wider block">
                  {t("booking.form_name") as string} *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Олексій"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-bg-light border border-border-subtle p-3 font-body text-xs rounded focus:outline-none focus:border-accent transition-colors text-text-main"
                />
              </div>

              <div className="space-y-1">
                <label className="font-body text-[0.65rem] text-text-main uppercase font-bold tracking-wider block">
                  {t("booking.form_phone") as string} *
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="+38 050 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-bg-light border border-border-subtle p-3 font-body text-xs rounded focus:outline-none focus:border-accent transition-colors text-text-main"
                />
              </div>

              <div className="space-y-1">
                <label className="font-body text-[0.65rem] text-text-main uppercase font-bold tracking-wider block">
                  {t("booking.form_service") as string}
                </label>
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-bg-light border border-border-subtle p-3 font-body text-xs rounded focus:outline-none focus:border-accent transition-colors text-text-main"
                >
                  <option value="">-- Оберіть процедуру --</option>
                  <option value="all4">Імплантація All-on-4</option>
                  <option value="all6">Імплантація All-on-6</option>
                  <option value="zygoma">Вилицева імплантація Zygoma</option>
                  <option value="microscope">Лікування під мікроскопом</option>
                  <option value="hygiene">Гігієна AirFlow</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-body text-[0.65rem] text-text-main uppercase font-bold tracking-wider block">
                  {t("booking.form_date") as string}
                </label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-bg-light border border-border-subtle p-3 font-body text-xs rounded focus:outline-none focus:border-accent transition-colors text-text-main"
                />
              </div>

              <label className="flex items-center space-x-3 cursor-pointer pt-2 pb-2 select-none">
                <input 
                  type="checkbox"
                  checked={sleep}
                  onChange={(e) => setSleep(e.target.checked)}
                  className="w-4 h-4 rounded text-accent border-border-subtle focus:ring-accent"
                />
                <span className="font-body text-[0.65rem] text-text-main font-bold uppercase tracking-wider">
                  {t("booking.form_sleep") as string}
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent-hover text-white font-body text-xs uppercase tracking-[0.2em] font-bold py-4 rounded transition-all duration-300 shadow-xl shadow-accent/20"
              >
                {loading ? "Відправка..." : (t("booking.form_btn") as string)}
              </button>

            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <span className="font-body text-4xl text-accent block font-bold select-none">✓</span>
              <h3 className="font-display font-bold text-text-main text-xl">
                {t("booking.success_title") as string}
              </h3>
              <p className="font-body text-xs text-text-muted leading-relaxed">
                {t("booking.success_desc") as string}
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
