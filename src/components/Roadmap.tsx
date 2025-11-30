import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { Section } from './Section';
import { fadeInUp, staggerContainer } from '../utils/animations';
import type {TranslationContent} from '../types';

export default function Roadmap({ t }: { t: TranslationContent }) {
    return (
        <Section id="roadmap" className="bg-slate-50">
            <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold mb-4">{t.roadmap.title}</h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    {t.roadmap.badge}
                </div>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="max-w-3xl mx-auto space-y-8"
            >
                {t.roadmap.steps.map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className={`flex gap-6 ${index === 2 ? 'opacity-60' : ''}`}>
                        <div className="flex flex-col items-center">
                            <div className={`w-4 h-4 rounded-full border-2 ${index === 1 ? 'bg-blue-600 border-blue-600 ring-4 ring-blue-100' : 'bg-white border-slate-300'}`}></div>
                            {index !== 2 && <div className="w-0.5 h-full bg-slate-200 my-2"></div>}
                        </div>
                        <div className="pb-8">
              <span className={`text-xs font-bold uppercase tracking-wider ${index === 1 ? 'text-blue-600' : 'text-slate-500'}`}>
                {item.phase}
              </span>
                            <h3 className="text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
                            <p className="text-slate-600 mt-2">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}