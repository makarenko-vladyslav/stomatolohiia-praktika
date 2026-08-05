"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Contact() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: 'All-on-4',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        date: '',
        service: 'All-on-4',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-bg-dark text-white border-b border-white/5 scroll-mt-20">
      
      {/* Non-neutral ground background vector decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent-soft blur-[150px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary blur-[120px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Contact details & Meta info block (Layers 1, 2, 3, 5, 6) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            
            <div className="flex flex-col items-start gap-4">
              {/* Abolished pill design: Clean uppercase tracking-widest editorial kicker */}
              <span className="text-accent font-mono text-[0.75rem] tracking-[0.2em] uppercase block mb-2">
                {t('contact.kicker')}
              </span>
              
              {/* Layer 2: Invitation Heading (No brand name) */}
              <h2 className="text-[2.8rem] md:text-[3.5rem] font-display font-light leading-tight text-white max-w-md">
                Оберіть ваш час для нового життя посмішки
              </h2>
              
              {/* Layer 3: Lede */}
              <p className="text-[1rem] text-white/70 font-sans leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>

            {/* Layer 5: Structured hours table */}
            <div className="flex flex-col gap-4 font-mono text-[0.8rem]">
              <span className="text-accent text-[0.65rem] tracking-wider block uppercase border-b border-white/10 pb-2">ГРАФІК РОБОТИ КЛІНІКИ</span>
              <div className="grid grid-cols-2 gap-2 text-white/80">
                <span>Понеділок — П'ятниця:</span>
                <span className="text-right">09:00 - 19:00</span>
                <span>Субота:</span>
                <span className="text-right">09:00 - 18:00</span>
                <span>Неділя:</span>
                <span className="text-right text-accent">За запитом</span>
              </div>
            </div>

            {/* Layer 6: Address & Map line & Phone */}
            <div className="flex flex-col gap-6 font-mono text-[0.8rem] text-white/60">
              <div className="border-t border-white/10 pt-4">
                <span className="text-accent text-[0.65rem] block mb-1">ФІЗИЧНА АДРЕСА</span>
                <span className="text-white font-semibold">{t('contact.info.address')} (Центральний вхід, КТ-кабінет)</span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <span className="text-accent text-[0.65rem] block mb-1">РЕЦЕПЦІЯ / ЧЕРГОВИЙ ХІРУРГ</span>
                <a href="tel:+380507717535" className="text-white hover:text-accent font-bold text-[0.9rem] flex items-center gap-2">
                  +38 050 771 75 35 — Консультація
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Styled Booking Form Card (Layer 4 & 7) */}
          <div className="lg:col-span-7 bg-primary/80 border border-white/10 p-8 rounded-xl shadow-2xl relative">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-mono text-white/50 uppercase">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  required
                  placeholder="Олексій" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/5 border border-white/10 focus:border-accent p-3 rounded font-sans text-[0.9rem] text-white focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-mono text-white/50 uppercase">{t('contact.form.phone')}</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+380 50 123 4567" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white/5 border border-white/10 focus:border-accent p-3 rounded font-sans text-[0.9rem] text-white focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-mono text-white/50 uppercase">{t('contact.form.date')}</label>
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="bg-white/5 border border-white/10 focus:border-accent p-3 rounded font-sans text-[0.9rem] text-white focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-mono text-white/50 uppercase">{t('contact.form.service')}</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="bg-white/5 border border-white/10 focus:border-accent p-3 rounded font-sans text-[0.9rem] text-white focus:outline-none [&>option]:text-primary"
                >
                  <option value="All-on-4">Імплантація All-on-4</option>
                  <option value="All-on-6">Імплантація All-on-6</option>
                  <option value="Zygoma">Вилицева Zygoma</option>
                  <option value="Crowns">Цирконієві коронки</option>
                  <option value="Veneers">Керамічні вініри</option>
                  <option value="Sedation">Лікування под седацією</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[0.65rem] font-mono text-white/50 uppercase">{t('contact.form.message')}</label>
                <textarea 
                  rows={4}
                  placeholder="Опишіть коротко вашу клінічну проблему..." 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-white/5 border border-white/10 focus:border-accent p-3 rounded font-sans text-[0.9rem] text-white focus:outline-none resize-none"
                />
              </div>

              <div className="md:col-span-2 mt-2">
                <button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-mono uppercase tracking-widest p-4 rounded text-[0.8rem] font-semibold transition-all duration-300 hover:shadow-[0_0_25px_hsl(162_90%_36%/_0.2)] cursor-pointer"
                >
                  {t('contact.form.submit')}
                </button>
              </div>

              {isSubmitted && (
                <div className="md:col-span-2 p-4 bg-accent/10 border border-accent/20 rounded text-center text-accent font-mono text-[0.8rem]">
                  {t('contact.form.success')}
                </div>
              )}

            </form>

            {/* Trust Micro-line (Layer 7) */}
            <span className="text-[0.6rem] font-mono text-white/30 block text-center mt-4 uppercase">
              Державна сертифікація медичних послуг згідно з ліцензією МОЗ України АЕ № 571435.
            </span>
          </div>

        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-[350px] rounded-xl overflow-hidden border border-white/10 shadow-2xl mt-16 bg-primary">
          <iframe 
            src="https://www.google.com/maps?q=Харків, проспект Науки, 77&output=embed"
            className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
            allowFullScreen={false} 
            loading="lazy" 
            title="Google Maps Location"
          />
        </div>

      </div>
    </section>
  );
}
