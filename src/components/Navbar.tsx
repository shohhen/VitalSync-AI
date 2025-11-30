import {motion} from 'framer-motion';
import {Activity} from 'lucide-react';
import type {Language, TranslationContent} from '../types';

interface NavbarProps {
    t: TranslationContent;
    lang: Language;
    setLang: (lang: Language) => void;
}

export default function Navbar({t, lang, setLang}: NavbarProps) {
    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.5}}
            className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100"
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-blue-600">
                    <Activity className="w-6 h-6"/>
                    <span>VitalSync AI</span>
                </div>

                <div className="flex items-center gap-8">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500 items-center">
                        <a href="#problem" className="hover:text-blue-600 transition">{t.nav.problem}</a>
                        <a href="#tech" className="hover:text-blue-600 transition">{t.nav.tech}</a>
                        <a href="#roadmap" className="hover:text-blue-600 transition">{t.nav.roadmap}</a>
                        <a href="#team" className="hover:text-blue-600 transition">{t.nav.team}</a>
                    </div>


                    <div
                        className="relative flex items-center gap-1 bg-slate-200/40 backdrop-blur-sm p-1 rounded-full border border-slate-200/50">
                        {(['en', 'ru', 'uz'] as Language[]).map((l) => (
                            <button
                                key={l}
                                onClick={() => setLang(l)}
                                className={`
                   relative z-10 w-10 h-8 bg-white! outline-none! border-none! rounded-full! text-xs font-bold transition-all duration-300 flex items-center justify-center
                   ${lang === l
                                    ? 'bg-white text-blue-600 shadow-md ring-1 ring-black/5'
                                    : 'text-slate-500 hover:bg-white/40'
                                }
                 `}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}