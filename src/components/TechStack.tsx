import { motion } from 'framer-motion';
import { Database, Cpu, MessageCircle, LayoutDashboard } from 'lucide-react';
import { Section } from './Section';
import { fadeInUp, staggerContainer } from '../utils/animations';
import type {TranslationContent} from '../types';

const TECH_ICONS = [<Database className="w-6 h-6" />, <Cpu className="w-6 h-6" />, <MessageCircle className="w-6 h-6" />, <LayoutDashboard className="w-6 h-6" />];

export default function TechStack({ t }: { t: TranslationContent }) {
    return (
        <Section id="tech" className="bg-white">
            <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold mb-4">{t.tech.title}</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">{t.tech.desc}</p>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-6"
            >
                {t.tech.stack.map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-4">
                            {TECH_ICONS[index]}
                        </div>
                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-slate-500">{item.role}</p>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}