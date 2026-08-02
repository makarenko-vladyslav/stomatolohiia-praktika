
"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BookingForm() {
  const { t } = useLocale();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    
    setTimeout(() => {
      setStatus("success");
      setName("");
      setPhone("");
      setDate("");
      setNotes("");
    }, 1500);
  };

  return (
    <section id="booking" className="py-12 md:py-20 lg:py-24 bg-primary text-white relative overflow-hidden scroll-mt-20">
      
      {/* Absolute positioned background glow rings (Layer 10) */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Dynamic 2-Column Split Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Booking meta details (Layer 4) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase">
              {t("booking.kicker") as string}
            </span>
            
            {/* INVITATION HEADING (Not brand name) */}
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
              {t("booking.title") as string}
            </h2>
            
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              {t("booking.subtitle") as string}
            </p>

            {/* Structured Hours Mini-Table (Layer 6) */}
            <div className="flex flex-col gap-2.5 font-mono border-y border-white/10 py-6 max-w-sm">
              <span className="text-[10px] text-accent font-bold tracking-widest uppercase mb-2">ГРАФІК ПРИЙОМУ КЛІНІКИ</span>
              <div className="flex justify-between text-xs text-white/80">
                <span>Будні дні</span>
                <span>09:00 - 19:00</span>
              </div>
              <div className="flex justify-between text-xs text-white/80">
                <span>Субота</span>
                <span>09:00 - 15:00</span>
              </div>
              <div className="flex justify-between text-xs text-white/40">
                <span>Неділя</span>
                <span>Зачинено</span>
              </div>
            </div>

            {/* Address details & CTA (Layer 7) */}
            <div className="flex flex-col gap-1 font-mono">
              <span className="text-[10px] text-white/40 uppercase tracking-wider">КОНСУЛЬТАЦІЙНИЙ ЦЕНТР</span>
              <p className="text-xs text-white/80">{t("common.address") as string}</p>
              <a href={`tel:${t("common.phone")}`} className="text-accent hover:text-white font-bold text-xs mt-1 transition-colors">
                Гаряча лінія: {t("common.phone") as string}
              </a>
            </div>
          </div>

          {/* Right Column actual interactive Form details (Layer 5) */}
          <div className="lg:col-span-7 bg-bg-dark border border-white/10 p-8 rounded shadow-2xl relative overflow-hidden">
            
            {status === "success" ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded bg-accent/10 text-accent flex items-center justify-center text-xl font-bold font-mono">
                  OK
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wider">ЗАПИС УСПІШНО СТВОРЕНО</h3>
                <p className="text-white/60 text-xs leading-relaxed max-w-sm">
                  {t("booking.success") as string}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-accent hover:text-white text-[10px] font-mono font-bold uppercase tracking-widest"
                >
                  НАДІСЛАТИ ІНШУ ЗАЯВКУ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {status === "error" && (
                  <div className="p-4 bg-rose-950/40 border border-rose-800 text-rose-300 text-xs rounded font-mono font-bold uppercase tracking-wider">
                    {t("booking.error") as string}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2 font-mono">
                    <label htmlFor="name-input" className="text-[9px] font-bold text-white/60 tracking-widest uppercase">
                      {t("booking.name") as string} *
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Іван Ковальчук"
                      className="w-full bg-white/5 border border-white/10 focus:border-accent p-3.5 text-xs text-white outline-none rounded font-sans"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-2 font-mono">
                    <label htmlFor="phone-input" className="text-[9px] font-bold text-white/60 tracking-widest uppercase">
                      {t("booking.phone") as string} *
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+38 050 000 00 00"
                      className="w-full bg-white/5 border border-white/10 focus:border-accent p-3.5 text-xs text-white outline-none rounded font-sans"
                    />
                  </div>
                </div>

                {/* Date Input */}
                <div className="flex flex-col gap-2 font-mono">
                  <label htmlFor="date-input" className="text-[9px] font-bold text-white/60 tracking-widest uppercase">
                    {t("booking.date") as string} *
                  </label>
                  <input
                    id="date-input"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-accent p-3.5 text-xs text-white outline-none rounded font-sans"
                  />
                </div>

                {/* Optional Message */}
                <div className="flex flex-col gap-2 font-mono">
                  <label htmlFor="notes-input" className="text-[9px] font-bold text-white/60 tracking-widest uppercase">
                    {t("booking.notes") as string}
                  </label>
                  <textarea
                    id="notes-input"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ваше повідомлення чи опис проблеми"
                    className="w-full bg-white/5 border border-white/10 focus:border-accent p-3.5 text-xs text-white outline-none rounded resize-none font-sans"
                  />
                </div>

                {/* Submit button & Trust notice */}
                <div className="flex flex-col gap-4 mt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-accent hover:bg-accent-dark text-white text-center py-4 text-[10px] font-bold uppercase tracking-widest transition-colors glow-accent disabled:opacity-50"
                  >
                    {status === "loading" ? "НАДСИЛАННЯ..." : (t("booking.submit") as string)}
                  </button>
                  <p className="text-[9px] font-mono text-white/40 text-center uppercase tracking-widest">
                    Натискаючи кнопку, ви погоджуєтесь на обробку медичних персональних даних.
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
