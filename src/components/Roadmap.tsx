import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle2, Circle, Clock, Target } from 'lucide-react';
import { Section } from './Section';
import { fadeInUp, staggerContainer } from '../utils/animations';
import type {TranslationContent} from '../types';

export default function Roadmap({ t }: { t: TranslationContent }) {
    const statusIcons = {
        completed: <CheckCircle2 className="w-5 h-5 text-green-600" />,
        current: <Circle className="w-5 h-5 text-blue-600 animate-pulse" />,
        upcoming: <Clock className="w-5 h-5 text-slate-400" />,
        planned: <Target className="w-5 h-5 text-slate-300" />
    };

    return (
        <Section id="roadmap" className="bg-slate-50">
            <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold mb-4">{t.roadmap.title}</h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm mb-6">
                    <TrendingUp className="w-4 h-4" />
                    {t.roadmap.badge}
                </div>

                {/* Current Status Box */}
                <div className="max-w-3xl mx-auto bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <Circle className="w-5 h-5 text-blue-600 animate-pulse" />
                        <h3 className="font-bold text-lg text-blue-900">Current Progress</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{t.roadmap.currentStatus}</p>
                </div>

                {/* Next Steps */}
                <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-6">
                    <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center justify-center gap-2">
                        <Target className="w-5 h-5 text-purple-600" />
                        Next Steps
                    </h3>
                    <ul className="space-y-2 text-left">
                        {t.roadmap.nextSteps.map((step, index) => (
                            <li key={index} className="flex items-start gap-3 text-slate-700">
                                <span className="text-purple-600 font-bold mt-1">→</span>
                                <span className="leading-relaxed">{step}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Roadmap Timeline */}
            <motion.div
                variants={staggerContainer}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="max-w-4xl mx-auto space-y-6"
            >
                {t.roadmap.steps.map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex gap-6">
                        <div className="flex flex-col items-center">
                            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                                item.status === 'completed' ? 'bg-green-100 border-green-600' :
                                item.status === 'current' ? 'bg-blue-100 border-blue-600 ring-4 ring-blue-100' :
                                item.status === 'upcoming' ? 'bg-slate-100 border-slate-300' :
                                'bg-white border-slate-200'
                            }`}>
                                {statusIcons[item.status as keyof typeof statusIcons]}
                            </div>
                            {index !== t.roadmap.steps.length - 1 && (
                                <div className={`w-0.5 h-full my-2 ${
                                    item.status === 'completed' ? 'bg-green-300' : 
                                    item.status === 'current' ? 'bg-blue-300' : 
                                    'bg-slate-200'
                                }`}></div>
                            )}
                        </div>
                        <div className={`pb-8 flex-1 ${item.status === 'planned' ? 'opacity-70' : ''}`}>
                            <span className={`text-xs font-bold uppercase tracking-wider ${
                                item.status === 'completed' ? 'text-green-600' :
                                item.status === 'current' ? 'text-blue-600' :
                                'text-slate-500'
                            }`}>
                                {item.phase}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
                            <p className="text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}