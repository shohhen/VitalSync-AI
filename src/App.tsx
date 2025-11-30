import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import BusinessModel from './components/BusinessModel';
import TechStack from './components/TechStack';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

import { translations } from './translations';
import type {Language} from './types';

export default function App() {
    const [lang, setLang] = useState<Language>('en');
    const t = translations[lang];

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
            <Navbar t={t} lang={lang} setLang={setLang} />
            <Hero t={t} lang={lang} />
            <ProblemSolution t={t} />
            <BusinessModel t={t} />
            <TechStack t={t} />
            <Roadmap t={t} />
            <Team t={t} />
            <Footer t={t} />
        </div>
    );
}