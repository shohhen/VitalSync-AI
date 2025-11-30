import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type {TranslationContent, Language} from '../types';

interface HeroProps {
    t: TranslationContent;
    lang: Language;
}

export default function Hero({ t, lang }: HeroProps) {
    return (
        <section className="pt-32 pb-20 px-6 text-center md:pt-48 md:pb-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-white">
            <AnimatePresence mode="wait">
                <motion.div
                    key={lang}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
            {t.hero.badge}
          </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
                        {t.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex justify-center">
                        <motion.a
                            href="https://t.me/your_bot_link"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                group relative px-8 py-4
                bg-white/40 backdrop-blur-xl
                border border-white/60
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                text-blue-600 font-bold rounded-full
                flex items-center justify-center gap-2 mx-auto
                transition-all duration-300
              "
                        >
                            <span className="relative z-10">{t.hero.cta}</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 rounded-full bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    </div>

                </motion.div>
            </AnimatePresence>
        </section>
    );
}