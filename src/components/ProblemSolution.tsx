import {motion} from 'framer-motion';
import {AlertCircle, CheckCircle2} from 'lucide-react';
import {Section} from './Section';
import {fadeInUp} from '../utils/animations';
import type {TranslationContent} from '../types';

export default function ProblemSolution({t}: { t: TranslationContent }) {
    return (
        <Section id="problem">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeInUp}
                    className="bg-white p-8 rounded-3xl shadow-xl border border-red-50 relative overflow-hidden"
                >
                    <div
                        className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
                    <div className="flex items-center gap-3 mb-6 text-red-600">
                        <AlertCircle className="w-8 h-8"/>
                        <div>
                            <h2 className="text-2xl font-bold">{t.problem.title}</h2>
                            <span
                                className="text-xs font-semibold uppercase tracking-wider text-red-400">{t.problem.domain}</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-slate-800">{t.problem.heading}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        {t.problem.desc}
                    </p>
                    <ul className="space-y-3">
                        {t.problem.list.map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-700">
                                <span className="text-red-500 font-bold">×</span> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeInUp}
                    className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden"
                >
                    <div
                        className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-bl-full -mr-8 -mt-8 opacity-20"></div>
                    <div className="flex items-center gap-3 mb-6 text-blue-400">
                        <CheckCircle2 className="w-8 h-8"/>
                        <h2 className="text-2xl font-bold">{t.solution.title}</h2>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{t.solution.heading}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        {t.solution.desc}
                    </p>
                    <ul className="space-y-3">
                        {t.solution.list.map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-200">
                                <CheckCircle2 className="w-5 h-5 text-blue-400"/> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
}