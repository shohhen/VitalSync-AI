import { motion } from 'framer-motion';
import { Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Section } from './Section';
import { fadeInUp, staggerContainer } from '../utils/animations';
import type {TranslationContent, TeamMemberStatic} from '../types';


// --- TEAM DATA ---
// NOTE: Paths must start with "/" and are relative to the 'public' folder.
const TEAM_DATA: TeamMemberStatic[] = [
    {
        name: "Rahmatilla Erkinov",
        photo: "/images/team/member1.jpg", // <--- LOCAL FILE
        experience: "5+ Years",
        exCompanies: [
            "/images/logos/logo7.png",      // <--- LOCAL FILE
            "/images/logos/logo5.png",
            "/images/logos/logo4.png",
        ],
        link: "https://linkedin.com/in/yourprofile"
    },
    {
        name: "Asrorbek Qalandarov",
        photo: "/images/team/member2.jpg", // <--- LOCAL FILE
        experience: "3 Years",
        exCompanies: [
            "/images/logos/logo1.png",
            "/images/logos/logo2.png",
            "/images/logos/logo3.png",
        ],
        link: "https://linkedin.com/in/theirprofile"
    },
    {
        name: "Shohjahon Karimberganov",
        // If no photo is provided, it will fallback to the User Icon
        photo: "/images/team/member3.jpg",
        experience: "4 Years",
        exCompanies: [
            "/images/logos/logo6.png",
            "/images/logos/logo4.png"
        ],
        link: "https://linkedin.com/in/theirprofile"
    },
    {
        name: "Ollayorbek Masharipov",
        // If no photo is provided, it will fallback to the User Icon
        photo: "/images/team/member4.jpg",
        experience: "4 Years",
        exCompanies: [
            "/images/logos/meta.svg",
            "/images/logos/spotify.svg"
        ],
        link: "https://linkedin.com/in/theirprofile"
    }
];

export default function Team({ t }: { t: TranslationContent }) {
    return (
        <Section id="team">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-8">{t.team.title}</h2>

                {/* Why we can solve this - ENHANCED */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-3xl max-w-4xl mx-auto border-2 border-blue-200 mb-16 shadow-lg">
                    <div className="flex items-center justify-center gap-3 text-blue-700 font-bold mb-6">
                        <Lightbulb className="w-7 h-7" />
                        <span className="text-2xl">{t.team.whyUsTitle}</span>
                    </div>
                    <p className="text-slate-800 leading-relaxed text-lg mb-6">
                        {t.team.whyUsDesc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-xl border border-blue-100">
                            <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
                            <div className="text-sm text-slate-600">Years Combined Experience</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-blue-100">
                            <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                            <div className="text-sm text-slate-600">Doctors Interviewed</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-blue-100">
                            <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                            <div className="text-sm text-slate-600">Committed to Healthcare Impact</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {TEAM_DATA.map((member, index) => {
                    const localizedMember = t.team.members[index];

                    return (
                        <motion.div key={index} variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">

                            {/* PROFILE PHOTO LOGIC */}
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-100 border-4 border-white shadow-sm overflow-hidden flex items-center justify-center relative">
                                {member?.photo ? (
                                    <img
                                        src={member?.photo}
                                        alt={member?.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback if image fails to load
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />
                                ) : null}
                                {/* Fallback Icon (Hidden if image loads successfully) */}
                                <div className={`absolute inset-0 flex items-center justify-center bg-slate-100 ${member.photo ? 'hidden' : ''}`}>
                                    <Users className="w-10 h-10 text-slate-400" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                            <p className="text-blue-600 font-medium mb-3">{localizedMember.role}</p>

                            {/* Experience Badge */}
                            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-6">
                                {member.experience} Experience
                            </div>

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