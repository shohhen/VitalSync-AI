export type Language = 'en' | 'ru' | 'uz';

export interface TeamMemberStatic {
    name: string;
    experience: string;
    exCompanies: string[]; // URLs of logos
    link: string;
}

// We infer the shape of the translation object from the default (English)
// preventing circular dependency issues.
import { translations } from '../translations';
export type TranslationContent = typeof translations.en;