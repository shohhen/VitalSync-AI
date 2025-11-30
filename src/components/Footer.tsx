import { Activity } from 'lucide-react';
import type {TranslationContent} from '../types';

export default function Footer({ t }: { t: TranslationContent }) {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 font-bold text-xl text-white">
                    <Activity className="w-6 h-6" />
                    <span>VitalSync AI</span>
                </div>
                <p className="text-sm">{t.footer}</p>
            </div>
        </footer>
    );
}