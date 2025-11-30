export type Language = 'en' | 'ru' | 'uz';

export interface TeamMemberStatic {
    name: string;
    photo?: string; // <--- Add this line (optional string)
    experience: string;
    exCompanies: string[]; // Paths to logos in public folder
    link: string;
}

// We infer the shape of the translation object from the default (English)
// preventing circular dependency issues.
import { translations } from '../translations';
export type TranslationContent = typeof translations.en;