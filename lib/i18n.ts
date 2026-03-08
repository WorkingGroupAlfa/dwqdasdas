export const locales = ['ua', 'de', 'sl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'sl';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
