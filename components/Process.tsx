"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

interface Step {
  num: string;
  title: string;
  desc: string;
}

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as Step[] || [];

  return (
    <section className="py-16 lg:py-24 bg-primary text-white relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-3 font-mono">
            [ ROADMAP ]
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            {t('process.title') as string}
          </h2>
          <p className="text-white/70 text-sm">
            {t('process.subtitle') as string}
          </p>
        </div>

        {/* Timelines row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 bg-primary/40 border border-white/5 group hover:border-accent/40 transition-colors"
            >
              {/* Stepper indicator with monospace styling */}
              <div className="font-mono font-extrabold text-3xl text-accent/30 group-hover:text-accent transition-colors mb-4">
                {step.num}
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                {step.title}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
