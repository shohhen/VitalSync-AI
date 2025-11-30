import { motion } from 'framer-motion';
import { Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Section } from './Section';
import { fadeInUp, staggerContainer } from '../utils/animations';
import type {TranslationContent, TeamMemberStatic} from '../types';

// STATIC TEAM DATA (Invariant)
// Replace these with your real details and logo URLs
const TEAM_DATA: TeamMemberStatic[] = [
    {
        name: "Your Name",
        experience: "5+ Years",
        exCompanies: [
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        ],
        link: "https://linkedin.com"
    },
    {
        name: "Teammate Name",
        experience: "3 Years",
        exCompanies: [
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        ],
        link: "https://linkedin.com"
    },
    {
        name: "Teammate Name",
        experience: "4 Years",
        exCompanies: [
            "https://upload.wikimedia.org/wikipedia/commons/e/e1/Meta_Inc._logo.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
        ],
        link: "https://linkedin.com"
    },
    {
        name: "Teammate Name",
        experience: "4 Years",
        exCompanies: [
            "https://upload.wikimedia.org/wikipedia/commons/e/e1/Meta_Inc._logo.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
        ],
        link: "https://linkedin.com"
    }
];

export default function Team({ t }: { t: TranslationContent }) {
    return (
        <Section id="team">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">{t.team.title}</h2>

                {/* Why we can solve this */}
                <div className="bg-blue-50 p-8 rounded-3xl max-w-4xl mx-auto border border-blue-100 mb-16">
                    <div className="flex items-center justify-center gap-2 text-blue-700 font-bold mb-4">
                        <Lightbulb className="w-5 h-5" />
                        <span>{t.team.whyUsTitle}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg">
                        {t.team.whyUsDesc}
                    </p>
                </div>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8"
            >
                {TEAM_DATA.map((member, index) => {
                    // We merge the static data (names/links) with the localized data (role/skills) via index
                    const localizedMember = t.team.members[index];

                    return (
                        <motion.div key={index} variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-400">
                                <Users />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                            <p className="text-blue-600 font-medium mb-3">{localizedMember.role}</p>

                            {/* Experience Badge */}
                            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-4">
                                {member.experience} Experience
                            </div>

                            {/* Stack of Company Logos */}
                            {member.exCompanies.length > 0 && (
                                <div className="flex justify-center items-center -space-x-3 mb-5">
                                    {member.exCompanies.map((logo, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-white shadow-sm overflow-hidden flex items-center justify-center">
                                            <img src={logo} alt="work" className="w-full h-full object-contain p-1" />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm z-10">
                                        +
                                    </div>
                                </div>
                            )}

                            <div className="text-sm text-slate-500 mb-6 px-4 min-h-[40px] flex items-center justify-center leading-tight">
                                {localizedMember.skills}
                            </div>

                            <a href={member.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-900 hover:text-blue-600 group inline-flex items-center gap-1">
                                {t.team.linkText} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
}