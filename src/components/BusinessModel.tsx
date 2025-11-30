import {motion} from 'framer-motion';
import {Building as BuildingIcon, Cpu, TrendingUp} from 'lucide-react';
import {Section} from './Section';
import {fadeInUp, staggerContainer} from '../utils/animations';
import type {TranslationContent} from '../types';

export default function BusinessModel({t}: { t: TranslationContent }) {
    return (
        <Section id="business" className="bg-blue-50/50">
            <motion.div
                initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeInUp}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold mb-4">{t.business.title}</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    {t.business.desc}
                </p>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden" whileInView="visible" viewport={{once: true}}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {t.business.cards.map((card, i) => (
                    <motion.div key={i} variants={fadeInUp}
                                className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-200 ${i === 1 ? 'border-l-4 border-l-blue-600' : ''}`}>
                        <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${i === 0 ? 'bg-green-100 text-green-600' : i === 1 ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}`}>
                            {i === 0 ? <BuildingIcon/> : i === 1 ? <TrendingUp/> : <Cpu/>}
                        </div>
                        <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}