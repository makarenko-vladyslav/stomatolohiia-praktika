
"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function SocialProof() {
  const { t } = useLocale();

  const stats = [
    {
      num: t('stats.rating') as string,
      sub: t('stats.ratingSub') as string,
    },
    {
      num: t('stats.operations') as string,
      sub: t('stats.operationsSub') as string,
    },
    {
      num: t('stats.zygoma') as string,
      sub: t('stats.zygomaSub') as string,
    },
  ];

  return (
    <section className="bg-primary py-12 border-t border-b border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="font-display font-bold text-3xl sm:text-4xl text-accent mb-2">
                {stat.num}
              </div>
              <div className="text-white/60 text-xs sm:text-sm tracking-wide">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
