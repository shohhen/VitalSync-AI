import {motion} from 'framer-motion';
import {AlertCircle, CheckCircle2, Heart, TrendingDown, Users, Activity} from 'lucide-react';
import {Section} from './Section';
import {fadeInUp} from '../utils/animations';
import type {TranslationContent} from '../types';

export default function ProblemSolution({t}: { t: TranslationContent }) {
    return (
        <Section id="problem" className="bg-gradient-to-b from-white to-slate-50">
            {/* Problem Section - Full Width Impact */}
            <motion.div
                initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeInUp}
                className="mb-24"
            >
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full font-semibold text-sm mb-4">
                        <AlertCircle className="w-4 h-4"/>
                        {t.problem.domain}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        {t.problem.title}
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
                        {t.problem.heading}
                    </h3>
                    <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
                        {t.problem.desc}
                    </p>
                </div>

                {/* Problem Statistics - Visual Cards */}
                <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                <TrendingDown className="w-6 h-6 text-red-600"/>
                            </div>
                            <div className="text-3xl font-bold text-red-600">40%</div>
                        </div>
                        <p className="text-sm text-slate-600 leading-snug">{t.problem.list[0]}</p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-orange-600"/>
                            </div>
                            <div className="text-3xl font-bold text-orange-600">70%</div>
                        </div>
                        <p className="text-sm text-slate-600 leading-snug">{t.problem.list[1]}</p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                <Activity className="w-6 h-6 text-amber-600"/>
                            </div>
                            <div className="text-3xl font-bold text-amber-600">60%</div>
                        </div>
                        <p className="text-sm text-slate-600 leading-snug">{t.problem.list[2]}</p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-600 hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                <Heart className="w-6 h-6 text-red-600"/>
                            </div>
                            <div className="text-2xl font-bold text-red-600">!</div>
                        </div>
                        <p className="text-sm text-slate-600 leading-snug">{t.problem.list[3]}</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Solution Section - Full Width Impact */}
            <motion.div
                initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeInUp}
                className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-12 md:p-16 rounded-3xl shadow-2xl"
            >
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full font-semibold text-sm mb-6">
                            <CheckCircle2 className="w-4 h-4"/>
                            {t.solution.title}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                            {t.solution.heading}
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                            {t.solution.desc}
                        </p>
                    </div>

                    {/* Solution Features - Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {t.solution.list.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="flex gap-4 items-start bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all"
                            >
                                <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0 mt-1"/>
                                <p className="text-white leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12">
                        <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                            <p className="text-blue-100 text-sm font-medium">
                                💡 Accessible via Telegram — no app installation, no complicated setup
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}