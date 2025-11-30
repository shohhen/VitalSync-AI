import { motion } from 'framer-motion';
import { Database, Cpu, MessageCircle, LayoutDashboard, Sparkles, Brain, TrendingUp, Shield } from 'lucide-react';
import { Section } from './Section';
import { fadeInUp, staggerContainer } from '../utils/animations';
import type {TranslationContent} from '../types';

const TECH_ICONS = [<Database className="w-6 h-6" />, <Cpu className="w-6 h-6" />, <MessageCircle className="w-6 h-6" />, <LayoutDashboard className="w-6 h-6" />, <Database className="w-5 h-5" />, <Shield className="w-5 h-5" />];
const AI_ICONS = [<Brain className="w-6 h-6" />, <Sparkles className="w-6 h-6" />, <TrendingUp className="w-6 h-6" />, <Shield className="w-6 h-6" />];

export default function TechStack({ t }: { t: TranslationContent }) {
    return (
        <Section id="tech" className="bg-white">
            <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold mb-2">{t.tech.title}</h2>
                <p className="text-lg text-blue-600 font-semibold mb-4">{t.tech.subtitle}</p>
                <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.tech.desc}</p>
            </motion.div>

            {/* AI Technologies Section - PROMINENT */}
            <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border-2 border-blue-200"
            >
                <div className="flex items-center justify-center gap-3 mb-8">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-slate-900">{t.tech.aiApproach.title}</h3>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {t.tech.aiApproach.items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-white p-6 rounded-2xl shadow-md border border-blue-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                    {AI_ICONS[index]}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-2 text-slate-900">{item.name}</h4>
                                    <p className="text-sm text-slate-600 mb-3 leading-relaxed">{item.desc}</p>
                                    <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                                        <p className="text-xs font-mono text-slate-700 leading-relaxed">
                                            <span className="font-semibold text-blue-600">Use Case:</span> {item.use}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Key Implementation Steps */}
            <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="mb-16"
            >
                <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Implementation Steps</h3>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-3">
                        {t.tech.keySteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
                            >
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    {index + 1}
                                </div>
                                <p className="text-slate-700 pt-1 leading-relaxed">{step}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
                <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Technology Stack</h3>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {t.tech.stack.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-4">
                                {TECH_ICONS[index]}
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-slate-900">{item.name}</h4>
                            <p className="text-sm text-slate-600 mb-3 leading-relaxed">{item.role}</p>
                            <div className="pt-3 border-t border-slate-200">
                                <p className="text-xs text-slate-500 font-medium">{item.tech}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    );
}