"use client";
import { useState, FormEvent } from "react";
import { useLocale } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLocale();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [prefDate, setPrefDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName("");
      setPhone("");
      setPrefDate("");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-card-light border-t border-border-subtle relative overflow-hidden">
      
      {/* DESIGNED NON-NEUTRAL BACKGROUND PATTERN */}
      <div className="absolute inset-0 bg-bg-light/80 pointer-events-none select-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* CLINICAL META LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-xs font-bold text-accent tracking-[0.25em] uppercase mb-4 block font-mono">
              {t("contact.kicker")}
            </span>
            <h2 className="heading-display text-3xl sm:text-5xl text-text-main mb-6 leading-tight">
              Заплануйте цифрову діагностику
            </h2>
            <p className="text-text-muted text-xs font-mono leading-relaxed mb-8">
              {t("contact.subtitle")}
            </p>

            <div className="space-y-6 pt-8 border-t border-border-subtle font-mono">
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-widest block mb-1">Клінічний координатор</span>
                <span className="text-text-main font-bold block">+38 050 771 75 35</span>
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-widest block mb-1">Адреса та локація</span>
                <span className="text-text-main font-bold block">{t("footer.address")} (ст. м. 23 Серпня)</span>
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-widest block mb-1">Години прийому</span>
                <span className="text-text-main font-bold block">{t("footer.hours")}</span>
              </div>
            </div>
          </div>

          {/* OPAQUE BOOKING FORM CONTAINER */}
          <div className="lg:col-span-7 bg-card-light p-8 sm:p-12 border border-border-subtle shadow-xl relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6 font-mono">
              
              <div>
                <label className="block text-[10px] font-bold text-text-main uppercase tracking-wider mb-2">
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Олександр Коваль"
                  className="w-full bg-bg-light border border-border-subtle p-4 text-xs text-text-main focus:border-accent focus:outline-none transition-colors rounded-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-text-main uppercase tracking-wider mb-2">
                  {t("contact.phoneLabel")}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+38 050 000 00 00"
                  className="w-full bg-bg-light border border-border-subtle p-4 text-xs text-text-main focus:border-accent focus:outline-none transition-colors rounded-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-text-main uppercase tracking-wider mb-2">
                  {t("contact.preferredDate")}
                </label>
                <input
                  type="date"
                  value={prefDate}
                  onChange={(e) => setPrefDate(e.target.value)}
                  className="w-full bg-bg-light border border-border-subtle p-4 text-xs text-text-main focus:border-accent focus:outline-none transition-colors rounded-none"
                />
              </div>

              {success && (
                <div className="p-4 bg-accent/10 border border-accent/20 text-accent text-xs leading-relaxed">
                  {t("contact.success")}
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent-deep text-white text-xs font-bold py-4.5 tracking-wider uppercase transition-colors rounded-none cursor-pointer"
                >
                  {loading ? t("contact.sending") : t("contact.send")}
                </button>
              </div>

              <div className="text-[9px] text-text-muted leading-relaxed text-center mt-4">
                *Ваші медичні дані надійно захищені згідно з Законом України про захист персональних даних.
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
