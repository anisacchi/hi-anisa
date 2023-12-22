import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './constants/locales';

const localeIds = locales.map(locale => locale.id);
export { localeIds }

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales: localeIds })