import {motion} from 'framer-motion';
import {Activity} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';
import type {Language, TranslationContent} from '../types';

interface NavbarProps {
    t: TranslationContent;
    lang: Language;
    setLang: (lang: Language) => void;
}

export default function Navbar({t, lang, setLang}: NavbarProps) {
    // The sections we show in the nav (order matters)
    const sections = ['problem', 'tech', 'roadmap', 'team'];

    const containerRef = useRef<HTMLDivElement | null>(null);
    const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [indicator, setIndicator] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

    // Update indicator position relative to container
    const updateIndicator = (index: number) => {
        const container = containerRef.current;
        const linkEl = linkRefs.current[index];
        if (!container || !linkEl) return;
        const containerRect = container.getBoundingClientRect();
        const linkRect = linkEl.getBoundingClientRect();
        const left = linkRect.left - containerRect.left + container.scrollLeft;
        const width = Math.max(32, linkRect.width); // min width
        setIndicator({ left, width });
    };

    // Scroll-based active detection
    useEffect(() => {
        const observerSections = sections
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        const onScroll = () => {
            const offset = window.innerHeight * 0.25; // detect earlier
            let newActive = 0;
            for (let i = 0; i < observerSections.length; i++) {
                const el = observerSections[i];
                const rect = el.getBoundingClientRect();
                if (rect.top - offset <= 0) {
                    newActive = i;
                }
            }
            if (newActive !== activeIndex) {
                setActiveIndex(newActive);
                updateIndicator(newActive);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', () => updateIndicator(activeIndex));

        // initial update
        updateIndicator(activeIndex);
        onScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', () => updateIndicator(activeIndex));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex]);

    // Update indicator when language or layout changes
    useEffect(() => {
        const onResize = () => updateIndicator(activeIndex);
        window.addEventListener('resize', onResize);
        // small timeout to allow layout to settle
        const id = setTimeout(() => updateIndicator(activeIndex), 120);
        return () => {
            window.removeEventListener('resize', onResize);
            clearTimeout(id);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

    const onNavClick = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        const id = sections[index];
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // small delay to allow browser to scroll
            setTimeout(() => {
                setActiveIndex(index);
                updateIndicator(index);
            }, 200);
        }
    };

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

                <div className="flex items-center gap-8 w-full max-w-2xl justify-end">
                    {/* Desktop Menu */}
                    <div ref={containerRef} className="hidden md:flex gap-6 text-sm font-medium text-slate-500 items-center relative">
                        {sections.map((s, i) => (
                            <a
                                key={s}
                                href={`#${s}`}
                                ref={(el) => (linkRefs.current[i] = el)}
                                onClick={(e) => onNavClick(e, i)}
                                className={`px-2 py-1 transition-colors ${activeIndex === i ? 'text-blue-600 font-semibold' : 'hover:text-blue-600 text-slate-500'}`}
                            >
                                {t.nav[s as keyof typeof t.nav]}
                            </a>
                        ))}

                        {/* Animated indicator */}
                        <motion.div
                            layout
                            transition={{type: 'spring', stiffness: 400, damping: 30}}
                            className="absolute bottom-0 h-0.5 bg-blue-600 rounded"
                            style={{ left: indicator.left, width: indicator.width }}
                        />
                    </div>

                    <div className="relative flex items-center gap-1 bg-slate-200/40 backdrop-blur-sm p-1 rounded-full border border-slate-200/50">
                        {(['en', 'ru', 'uz'] as Language[]).map((l) => (
                            <button
                                key={l}
                                onClick={() => setLang(l)}
                                className={
                                    `
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