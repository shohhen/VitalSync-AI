import { motion, AnimatePresence } from 'framer-motion';
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
          <span className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 text-blue-700 text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm shadow-sm">
            🏆 {t.hero.badge}
          </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
                        {t.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {t.hero.subtitle}
                    </p>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}